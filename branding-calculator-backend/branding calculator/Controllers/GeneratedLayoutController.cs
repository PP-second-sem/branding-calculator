using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO.Compression;
using System.Security.Claims;
using System.Text;
using Yamal.Application;
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
        public async Task<ActionResult<int>> Delete(int id)
        {
            return await _service.Delete(id);
        }

   

        // ==================== СОХРАНЕНИЕ МАКЕТА (ZIP + JSON) ====================

        [HttpPost("saveUserLayout")]
        [RequestSizeLimit(50_000_000)]
        [DisableRequestSizeLimit]
        public async Task<IActionResult> SaveUserLayout([FromForm] LayoutSaveRequest request)
        {
            if (request?.Files == null || request.Files.Count == 0)
                return BadRequest(new { error = "Файлы не предоставлены" });

            int userId;
            try
            {
                userId = GetUserIdFromToken();
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { error = ex.Message });
            }

            var guid = Guid.NewGuid().ToString();
            var baseFileName = $"{userId}_{guid}";
            var zipFilePath = GetLayoutFilePath(baseFileName, ".zip");
            var jsonFilePath = GetLayoutFilePath(baseFileName, "Json.json");

            try
            {
                // === Создаём ZIP-архив ===
                using var zipStream = new FileStream(zipFilePath, FileMode.Create, FileAccess.Write, FileShare.None, 4096, FileOptions.Asynchronous);
                using var archive = new ZipArchive(zipStream, ZipArchiveMode.Create);

                foreach (var file in request.Files)
                {
                    if (file.Length > 0)
                    {
                        var safeFileName = Path.GetFileName(file.FileName);
                        var entry = archive.CreateEntry(safeFileName, CompressionLevel.Optimal);
                        using var entryStream = entry.Open();
                        await file.CopyToAsync(entryStream);
                    }
                }

                // === Сохраняем JSON ===
                var jsonContent = request.JsonContent?.Trim() ?? "{}";
                await System.IO.File.WriteAllTextAsync(jsonFilePath, jsonContent, Encoding.UTF8);


                return Ok(new
                {
                    success = true,
                    userId,
                    guid,
                    zipFile = $"{baseFileName}.zip",
                    jsonFile = $"{baseFileName}Json.json",
                    savedAt = DateTime.UtcNow
                });
            }
            catch (IOException ex)
            {
                CleanupFiles(zipFilePath, jsonFilePath);
                return StatusCode(500, new { error = "Ошибка записи файлов на диск" });
            }
            catch (Exception ex)
            {
                CleanupFiles(zipFilePath, jsonFilePath);
                return StatusCode(500, new { error = "Внутренняя ошибка сервера" });
            }
        }

        // ==================== СКАЧИВАНИЕ МАКЕТА ====================


        [HttpGet("userLayout/{guid}")]
        [Authorize]
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
        [Authorize]
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
        [Authorize]
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


    public class LayoutSaveRequest
    {

        public string? JsonContent { get; set; }

        public List<IFormFile> Files { get; set; } = new();
    }

    public class UserLayoutInfoDto
    {
        public string Guid { get; set; } = string.Empty;
        public string ZipFileName { get; set; } = string.Empty;
        public string JsonFileName { get; set; } = string.Empty;
        public bool JsonExists { get; set; }
        public long FileSizeBytes { get; set; }
        public DateTime CreatedAtUtc { get; set; }
    }
}