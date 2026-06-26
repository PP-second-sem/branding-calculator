using branding_calculator.Contracts.Layouts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.IO.Compression;
using System.Security.Claims;
using System.Text;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace branding_calculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GeneratedLayoutController : ControllerBase
    {
        private readonly IGeneratedLayoutService _service;
        private readonly IWebHostEnvironment _env;

        public GeneratedLayoutController(
            IGeneratedLayoutService service,
            IWebHostEnvironment env)
        {
            _service = service;
            _env = env;
        }

        // ==================== 🗄️ МЕТОДЫ РАБОТЫ С БД (оставляем без изменений) ====================

        [HttpGet("All")]
        public async Task<ActionResult<List<GeneratedLayout>>> GetAll()
        {
            return await _service.GetAll();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<GeneratedLayout>> GetById(int id)
        {
            var layout = await _service.GetById(id);
            if (layout == null) return NotFound($"Layout with ID {id} not found");
            return Ok(layout);
        }

        [HttpDelete("{id:int}/Delete")]
        [Authorize(Roles ="Admin")]
        public async Task<ActionResult<int>> Delete(int id)
        {
            return await _service.Delete(id);
        }



        [HttpPost("saveUserLayout")]
        [RequestSizeLimit(524_288_000)] // 500 МБ
        [DisableRequestSizeLimit]
        public async Task<IActionResult> SaveUserLayout([FromForm] LayoutSaveRequest request)
        {
            if (request?.Files == null || request.Files.Count == 0)
                return BadRequest(new { error = "Файлы не предоставлены" });

            int userId;
            try { userId = GetUserIdFromToken(); }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { error = ex.Message });
            }

            var formats = request.Files
                .Select(f => Path.GetExtension(f.FileName)?.TrimStart('.').ToLowerInvariant())
                .Where(ext => !string.IsNullOrWhiteSpace(ext))
                .Distinct()
                .ToList();

            if (formats.Count == 0)
                return BadRequest(new { error = "Не удалось определить форматы загруженных файлов." });

            var outputFormatsString = string.Join(",", formats);

            var guid = Guid.NewGuid().ToString();
            var baseFileName = $"{userId}_{guid}";
            var zipFilePath = GetLayoutFilePath(baseFileName, ".zip");
            var jsonFilePath = GetLayoutFilePath(baseFileName, "Json.json");
            var packageUrl = Path.Combine("Data", "UserLayouts", $"{baseFileName}.zip");

            try
            {
                // 1. Создаём ZIP
                using var zipStream = new FileStream(zipFilePath, FileMode.Create, FileAccess.Write, FileShare.None, 4096, FileOptions.Asynchronous);
                using var archive = new ZipArchive(zipStream, ZipArchiveMode.Create);

                foreach (var file in request.Files)
                {
                    if (file.Length > 0)
                    {
                        var safeName = Path.GetFileName(file.FileName);
                        var entry = archive.CreateEntry(safeName, CompressionLevel.Optimal);
                        using var entryStream = entry.Open();
                        await file.CopyToAsync(entryStream);
                    }
                }

                // 2. Сохраняем JSON
                var jsonContent = request.JsonContent?.Trim() ?? "{}";
                await System.IO.File.WriteAllTextAsync(jsonFilePath, jsonContent, Encoding.UTF8);

                // 3. Сохраняем запись в БД
                var layoutEntity = new GeneratedLayout
                (0,
                    userId,
                    request.CarrierTypeId,
                    jsonContent,
                    packageUrl,
                    outputFormatsString,
                    DateTime.UtcNow
                );

                var savedLayout = await _service.Create(layoutEntity);


                return Ok(new
                {
                    success = true,
                    layoutId = savedLayout,
                    userId,
                    guid,
                    packageUrl,
                    outputFormats = outputFormatsString,
                    jsonFile = $"{baseFileName}Json.json"
                });
            }
            catch (Exception ex)
            {
                CleanupFiles(zipFilePath, jsonFilePath);
                return StatusCode(500, new { error = "Не удалось сохранить макет. Данные откатаны.", ex.Message, ex.InnerException });
            }
        }

        // ==================== СКАЧИВАНИЕ МАКЕТА ====================


        [HttpGet("userLayout/{guid}")]
        [Produces("application/zip", "application/json")]
        public async Task<IActionResult> DownloadUserLayout(string guid)
        {
            var userId = GetUserIdFromToken();
            var baseFileName = $"{userId}_{guid}";
            var zipFilePath = GetLayoutFilePath(baseFileName, ".zip");

            if (!System.IO.File.Exists(zipFilePath))
            {
                return NotFound(new { error = "Макет не найден или недоступен" });
            }

            // Стриминг файла без загрузки в память
            var stream = new FileStream(zipFilePath, FileMode.Open, FileAccess.Read, FileShare.Read, 4096, FileOptions.Asynchronous);
            var fileName = $"{baseFileName}.zip";

            return File(stream, "application/zip", fileName);
        }

        /// <summary>
        /// Скачать только JSON-метаданные макета
        /// </summary>
        [HttpGet("userLayout/{guid}/metadata")]
        [Produces("application/json")]
        public async Task<IActionResult> DownloadLayoutMetadata(string guid)
        {
            var userId = GetUserIdFromToken();
            var baseFileName = $"{userId}_{guid}";
            var jsonFilePath = GetLayoutFilePath(baseFileName, "Json.json");

            if (!System.IO.File.Exists(jsonFilePath))
            {
                return NotFound(new { error = "Метаданные макета не найдены" });
            }

            var jsonContent = await System.IO.File.ReadAllTextAsync(jsonFilePath, Encoding.UTF8);
            return Content(jsonContent, "application/json; charset=utf-8");
        }


        [HttpDelete("userLayout/{guid}")]
        public IActionResult DeleteUserLayout(string guid)
        {
            var userId = GetUserIdFromToken();
            var baseFileName = $"{userId}_{guid}";

            var zipPath = GetLayoutFilePath(baseFileName, ".zip");
            var jsonPath = GetLayoutFilePath(baseFileName, "Json.json");

            var deleted = false;

            if (System.IO.File.Exists(zipPath))
            {
                System.IO.File.Delete(zipPath);
                deleted = true;
            }

            if (System.IO.File.Exists(jsonPath))
            {
                System.IO.File.Delete(jsonPath);
                deleted = true;
            }

            if (!deleted)
                return NotFound(new { error = "Файлы макета не найдены" });

            return Ok(new { success = true, message = "Макет пользователя удалён" });
        }

        [HttpGet("userLayouts/mine")]
        public ActionResult<List<UserLayoutInfoDto>> GetUserLayouts()
        {
            int userId;
            try { userId = GetUserIdFromToken(); }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { error = ex.Message });
            }

            var layoutDir = GetUserLayoutsDirectory();
            var prefix = $"{userId}_";
            var layouts = new List<UserLayoutInfoDto>();

            // EnumerateFiles эффективнее для больших директорий
            foreach (var zipPath in Directory.EnumerateFiles(layoutDir, $"{prefix}*.zip"))
            {
                var fileName = Path.GetFileName(zipPath);

                // Парсинг GUID из имени файла: {userId}_{guid}.zip
                var guidStartIndex = prefix.Length;
                var guidEndIndex = fileName.LastIndexOf(".zip", StringComparison.Ordinal);
                if (guidEndIndex <= guidStartIndex) continue;

                var guidStr = fileName.Substring(guidStartIndex, guidEndIndex - guidStartIndex);
                if (!Guid.TryParse(guidStr, out var guid))
                {

                    continue;
                }

                var jsonFileName = $"{userId}_{guidStr}Json.json";
                var jsonPath = Path.Combine(layoutDir, jsonFileName);

                var zipInfo = new FileInfo(zipPath);
                layouts.Add(new UserLayoutInfoDto
                {
                    Guid = guid.ToString(),
                    ZipFileName = fileName,
                    JsonFileName = jsonFileName,
                    JsonExists = System.IO.File.Exists(jsonPath),
                    FileSizeBytes = zipInfo.Length,
                    CreatedAtUtc = zipInfo.CreationTimeUtc
                });
            }

            return Ok(layouts.OrderByDescending(l => l.CreatedAtUtc).ToList());

        }

        // ==================== ВСПОМОГАТЕЛЬНЫЕ МЕТОДЫ ====================

        private int GetUserIdFromToken()
        {
            var userIdClaim = User.FindFirst("userId") ??
                              User.FindFirst(ClaimTypes.NameIdentifier) ??
                              User.FindFirst("sub");

            if (userIdClaim == null)
                throw new UnauthorizedAccessException("Токен не содержит userId");

            if (!int.TryParse(userIdClaim.Value, out var userId))
                throw new UnauthorizedAccessException("Неверный формат userId в токене");

            return userId;
        }

        private string GetUserLayoutsDirectory()
        {
            var dir = Path.Combine(_env.ContentRootPath, "Data", "UserLayouts");
            Directory.CreateDirectory(dir); // Создаёт, если отсутствует
            return dir;
        }

        private string GetLayoutFilePath(string baseFileName, string extension)
        {
            var relativePath = Path.Combine("Data", "UserLayouts");
            var targetDirectory = Path.Combine(_env.ContentRootPath, relativePath);
            Directory.CreateDirectory(targetDirectory);
            return Path.Combine(targetDirectory, $"{baseFileName}{extension}");
        }


        private void CleanupFiles(params string[] paths)
        {
            foreach (var path in paths)
            {
                if (!string.IsNullOrEmpty(path) && System.IO.File.Exists(path))
                    System.IO.File.Delete(path);
            }
        }

    }
}
