using branding_calculator.Contracts;
using Microsoft.AspNetCore.Mvc;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace branding_calculator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MaterialController : ControllerBase
    {
        private readonly IServices<Material> _services;
        private readonly IWebHostEnvironment _environment;

        public MaterialController(IServices<Material> services, IWebHostEnvironment environment)
        {
            _environment = environment;
            _services = services;
        }

        // GET: api/Material
        [HttpGet]
        public async Task<ActionResult<List<MaterialResponse>>> GetMaterials()
        {
            var materials = await _services.GetAllEntities();

            var response = materials.Select(m => new MaterialResponse(
                m.Id,
                m.Category,
                m.Sphere,
                m.Name,
                m.Description,
                m.City,
                m.Color,
                m.PreviewUrl,
                m.FilePath,
                m.FileType,
                m.FileSize
            ));

            return Ok(response);
        }

        // GET: api/Material/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<MaterialResponse>> GetMaterial(int id)
        {
            var materials = await _services.GetAllEntities();
            var material = materials.FirstOrDefault(m => m.Id == id);

            if (material == null)
                return NotFound($"Material with ID {id} not found");

            var response = new MaterialResponse(
                material.Id,
                material.Category,
                material.Sphere,
                material.Name,
                material.Description,
                material.City,
                material.Color,
                material.PreviewUrl,
                material.FilePath,
                material.FileType,
                material.FileSize
            );

            return Ok(response);
        }

        // GET: api/Material/{id}/download
        [HttpGet("{id:int}/download")]
        public async Task<IActionResult> DownloadMaterialFile(int id)
        {
            var materials = await _services.GetAllEntities();
            var material = materials.FirstOrDefault(m => m.Id == id);

            if (material == null)
                return NotFound($"Material with ID {id} not found");

            // Проверка прав на скачивание
            if (!material.IsDownloadable)
                return Forbid("This material cannot be downloaded");

            // Формируем полный путь к файлу
            var fullFilePath = material.FilePath;

            // Проверяем существование файла
            if (!System.IO.File.Exists(fullFilePath))
                return NotFound("File not found on server");

            // Читаем и возвращаем файл
            var fileBytes = await System.IO.File.ReadAllBytesAsync(fullFilePath);
            var contentType = GetContentType(material.FileType ?? "bin");

            return File(fileBytes, contentType, material.Name ?? "download");
        }

        // POST: api/Material (создание с файлом)
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult<int>> CreateMaterial([FromForm] MaterialWithFileRequest request)
        {
            // 1. Валидация обязательных полей
            if (string.IsNullOrWhiteSpace(request.Category))
                return BadRequest("Category is required");

            if (string.IsNullOrWhiteSpace(request.Name))
                return BadRequest("Name is required");

            if (request.File == null || request.File.Length == 0)
                return BadRequest("File is required");

            // 2. Валидация файла
            if (request.File.Length > 50 * 1024 * 1024) // 16 MB
                return BadRequest("File too large (max 50 MB)");

            // 3. Сохраняем файл на диск
            var uploadsFolder = Path.Combine(_environment.ContentRootPath, "Uploads", "Materials");
            if (!Directory.Exists(uploadsFolder))
                Directory.CreateDirectory(uploadsFolder);

            var uniqueFileName = $"{Guid.NewGuid()}_{request.File.FileName}";
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await request.File.CopyToAsync(stream);
            }

            var fileType = Path.GetExtension(request.File.FileName).TrimStart('.');
            if (string.IsNullOrEmpty(fileType))
                fileType = "bin";

            // 4. Создаем Domain модель
            var (material, error) = Material.Create(
                0,
                request.Category,
                request.Sphere,
                request.Name,
                request.Description,
                request.City,
                request.Color,
                true,  
                request.PreviewUrl,
                filePath,  // Путь к папке с файлами
                fileType,
                (int)request.File.Length,
                DateTime.Now
            );

            if (!string.IsNullOrEmpty(error))
            {
                // Если ошибка - удаляем сохраненный файл
                if (System.IO.File.Exists(filePath))
                    System.IO.File.Delete(filePath);

                return BadRequest(error);
            }

            // 5. Сохраняем в БД
            var materialId = await _services.CreateEntity(material);

            return Ok(new { id = materialId, message = "Material created successfully" });
        }

        // PUT: api/Material/5 (полное обновление материала)
        [HttpPut("{id:int}")]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult<int>> UpdateMaterial(int id, [FromForm] MaterialWithFileRequest request)
        {
            // 1. Проверяем существование материала
            var existingMaterials = await _services.GetAllEntities();
            var existingMaterial = existingMaterials.FirstOrDefault(m => m.Id == id);

            if (existingMaterial == null)
                return NotFound($"Material with ID {id} not found");

            // 2. Валидация обязательных полей
            if (string.IsNullOrWhiteSpace(request.Category))
                return BadRequest("Category is required");

            if (string.IsNullOrWhiteSpace(request.Name))
                return BadRequest("Name is required");


            string? filePath = existingMaterial.FilePath;
            string? fileType = existingMaterial.FileType;
            int? fileSize = existingMaterial.FileSize;
            string? fileName = existingMaterial.Name;


            // 3. Если загружен новый файл - обновляем
            if (request.File != null && request.File.Length > 0)
            {
                // Валидация нового файла
                if (request.File.Length > 16 * 1024 * 1024)
                    return BadRequest("File too large (max 16 MB)");

                // Удаляем старый файл
                var oldFilePath = Path.Combine(existingMaterial.FilePath ?? "", existingMaterial.Name ?? "");
                if (System.IO.File.Exists(oldFilePath))
                    System.IO.File.Delete(oldFilePath);

                // Сохраняем новый файл
                var uploadsFolder = Path.Combine(_environment.ContentRootPath, "Uploads", "Materials");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                var uniqueFileName = $"{Guid.NewGuid()}_{request.File.FileName}";
                fileName = request.File.FileName;
                fileType = Path.GetExtension(request.File.FileName).TrimStart('.');
                fileSize = (int)request.File.Length;

                filePath = Path.Combine(uploadsFolder, uniqueFileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await request.File.CopyToAsync(stream);
                }
            }
            else return BadRequest("File can't be null");

            // 4. Создаем обновленную Domain модель
            var (material, error) = Material.Create(
                id,
                request.Category,
                request.Sphere,
                request.Name,
                request.Description,
                request.City,
                request.Color,
                true,
                request.PreviewUrl,
                filePath,
                fileType,
                fileSize ?? 0,
                DateTime.Now
            );

            if (!string.IsNullOrEmpty(error))
                return BadRequest(error);

            // 5. Обновляем в БД
            var materialId = await _services.UpdateEntity(material);

            return Ok(new { id = materialId, message = "Material updated successfully" });
        }

        // DELETE: api/Material/5 (удаление материала и файла)
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<int>> DeleteMaterial(int id)
        {
            // 1. Проверяем существование материала
            var materials = await _services.GetAllEntities();
            var material = materials.FirstOrDefault(m => m.Id == id);

            if (material == null)
                return NotFound($"Material with ID {id} not found");

            // 2. Удаляем файл с диска
            var fullFilePath = Path.Combine(material.FilePath ?? "", material.Name ?? "");
            if (System.IO.File.Exists(fullFilePath))
            {
                System.IO.File.Delete(fullFilePath);
            }

            // 3. Удаляем материал из БД
            var result = await _services.DeleteEntity(id);

            return Ok(new { id = result, message = "Material and associated file deleted successfully" });
        }

        // Вспомогательный метод для определения Content-Type
        private string GetContentType(string fileExtension)
        {
            return fileExtension.ToLower() switch
            {
                "jpg" or "jpeg" => "image/jpeg",
                "png" => "image/png",
                "gif" => "image/gif",
                "pdf" => "application/pdf",
                "doc" => "application/msword",
                "docx" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "xls" => "application/vnd.ms-excel",
                "xlsx" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "txt" => "text/plain",
                "zip" => "application/zip",
                _ => "application/octet-stream"
            };
        }
    }
}