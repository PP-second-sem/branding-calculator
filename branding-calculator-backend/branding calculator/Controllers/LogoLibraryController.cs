using Microsoft.AspNetCore.Mvc;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;
using branding_calculator.Contracts.Logos;

namespace branding_calculator.Controllers
{
    [Route("api/[controller]")]  
    [ApiController]
    public class LogoLibraryController : ControllerBase
    {
        private readonly IServices<LogoLibrary> _service;
        private readonly IWebHostEnvironment _environment;

        public LogoLibraryController(IServices<LogoLibrary> service, IWebHostEnvironment environment)
        {
            _environment = environment;
            _service = service;
        }

        // GET: api/LogoLibrary/all
        [HttpGet("all")]
        public async Task<ActionResult<List<LogoResponse>>> GetAllEntity()
        {
            var logos = await _service.GetAllEntities();
            var response = logos.Select(l => new LogoResponse(
                l.Name,
                l.FilePath,
                l.FileType,
                l.IsActive,
                l.SortOrder
            ));
            return Ok(response.ToList());
        }

        // DELETE: api/LogoLibrary/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<int>> DeleteEntity(int id)
        {
            var logos = await _service.GetAllEntities();
            var logo = logos.FirstOrDefault(l => l.Id == id);

            if (logo == null)
                return NotFound($"Logo with ID {id} not found");

            // Удаление файла
            if (!string.IsNullOrEmpty(logo.FilePath) && System.IO.File.Exists(logo.FilePath))
            {
                System.IO.File.Delete(logo.FilePath);
            }

            var result = await _service.DeleteEntity(id);

            return Ok(new { id = result, message = "Logo and associated file deleted successfully" });
        }

        // POST: api/LogoLibrary/add
        [HttpPost("add")]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult<int>> AddLogo([FromForm] LogoWithFileRequest request)
        {
            try
            {
                // 1. Валидация обязательных полей
                if (string.IsNullOrWhiteSpace(request.Name))
                    return BadRequest(new { error = "Name is required" });

                if (request.File == null || request.File.Length == 0)
                    return BadRequest(new { error = "File is required" });

                // 2. Валидация размера файла (5 MB)
                if (request.File.Length > 5 * 1024 * 1024)
                    return BadRequest(new { error = "File too large (max 5 MB)" });

                // 3. Валидация типа файла
                var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".svg", ".gif", ".ai", ".eps" };
                var fileExtension = Path.GetExtension(request.File.FileName).ToLower();

                if (!allowedExtensions.Contains(fileExtension))
                    return BadRequest(new { error = $"File type {fileExtension} not allowed. Allowed: {string.Join(", ", allowedExtensions)}" });

                // 4. Сохранение файла
                var uploadsFolder = Path.Combine(_environment.ContentRootPath, "Uploads", "Logos");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                var uniqueFileName = $"{Guid.NewGuid()}_{request.File.FileName}";
                var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await request.File.CopyToAsync(stream);
                }

                // 5. Определение типа файла
                var fileType = fileExtension.TrimStart('.');
                if (string.IsNullOrEmpty(fileType))
                    fileType = "bin";

                // 6. Создание сущности
                var logo = new LogoLibrary(
                    0,
                    request.Name,
                    filePath,
                    fileType,
                    request.IsActive,
                    request.SortOrder
                );

                var id = await _service.CreateEntity(logo);

                return Ok(new { id = id, message = "Logo created successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = $"Internal server error: {ex.Message}" });
            }
        }

        // GET: api/LogoLibrary/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<LogoResponse>> GetLogoById(int id)
        {
            var logos = await _service.GetAllEntities();
            var logo = logos.FirstOrDefault(l => l.Id == id);

            if (logo == null)
                return NotFound(new { error = $"Logo with ID {id} not found" });

            var response = new LogoResponse(
                logo.Name,
                logo.FilePath,
                logo.FileType,
                logo.IsActive,
                logo.SortOrder
            );

            return Ok(response);
        }

        // PUT: api/LogoLibrary/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateLogo(int id, [FromBody] LogoUpdateRequest request)
        {
            var logos = await _service.GetAllEntities();
            var existingLogo = logos.FirstOrDefault(l => l.Id == id);

            if (existingLogo == null)
                return NotFound(new { error = $"Logo with ID {id} not found" });

            // Обновление полей
            var logo = new LogoLibrary(existingLogo.Id, existingLogo.Name,
                existingLogo.FilePath, existingLogo.FileType,
                existingLogo.IsActive, existingLogo.SortOrder);


            await _service.UpdateEntity(logo);

            return Ok(new { message = "Logo updated successfully" });
        }
    }
}