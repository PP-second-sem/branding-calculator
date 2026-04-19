using branding_calculator.Contracts;
using Microsoft.AspNetCore.Mvc;
using Yamal.Application;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace branding_calculator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MaterialController : ControllerBase
    {
        private readonly IServices<Material> _services;
        private readonly IFileService _fileService;
        private readonly string _uploadFolder;

        public MaterialController(IServices<Material> services, IFileService fileService, IConfiguration configuration) 
        { 
            _services = services;
            _fileService = fileService;
            _uploadFolder = configuration.GetValue<string>("UploadFolder") ?? "uploads";
        }

        [HttpGet]
        public async Task<ActionResult<List<MaterialResponse>>> GetMaterials()
        {
            var materials = await _services.GetAllMaterials();

            var response = materials.Where(m => m.IsDownloadable).Select(m => new MaterialResponse(m.Id, m.Category,
                                                                m.Sphere, m.Name,
                                                                m.Description, m.City,
                                                                m.Color, m.PreviewUrl,
                                                                m.FilePath, m.FileType,
                                                                m.FileSize));
            return Ok(response);
        }

        [HttpGet("{id:int}/file")]
        public async Task<IActionResult> GetFile(int id)
        {
            var materials = await _services.GetAllMaterials();
            var material = materials.FirstOrDefault(m => m.Id == id);

            if (material == null || string.IsNullOrEmpty(material.FilePath))
            {
                return NotFound();
            }

            try
            {
                var fileBytes = await _fileService.GetFileAsync(material.FilePath);
                var fileName = Path.GetFileName(material.FilePath);
                return File(fileBytes, "application/octet-stream", fileName);
            }
            catch (FileNotFoundException)
            {
                return NotFound("File not found");
            }
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateMaterial([FromForm] MaterialRequest request, IFormFile? file)
        {
            string? filePath = null;
            string? fileType = null;
            int? fileSize = null;

            if (file != null && file.Length > 0)
            {
                filePath = await _fileService.SaveFileAsync(file, _uploadFolder);
                fileType = file.ContentType;
                fileSize = (int)file.Length;
            }

            var (material, error) = Material.Create(0, request.Category,
                request.Sphere, request.Name,
                request.Description, request.City,
                request.Color, true,
                request.PreviewUrl ?? "", filePath ?? "",
                fileType ?? "", fileSize ?? 0,
                DateTime.Now
                );
            if (!string.IsNullOrEmpty(error)) return BadRequest(error);

            var materialId = await _services.CreateMaterial(material);

            return Ok(materialId);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<int>> UpdateMaterial(int id, [FromForm] MaterialRequest request, IFormFile? file)
        {
            var materials = await _services.GetAllMaterials();
            var existingMaterial = materials.FirstOrDefault(m => m.Id == id);

            string? filePath = existingMaterial?.FilePath;
            string? fileType = existingMaterial?.FileType;
            int? fileSize = existingMaterial?.FileSize;

            // Если загружен новый файл, удаляем старый и сохраняем новый
            if (file != null && file.Length > 0)
            {
                if (!string.IsNullOrEmpty(filePath))
                {
                    await _fileService.DeleteFileAsync(filePath);
                }

                filePath = await _fileService.SaveFileAsync(file, _uploadFolder);
                fileType = file.ContentType;
                fileSize = (int)file.Length;
            }

            var (material, error) = Material.Create(id, request.Category,
                                    request.Sphere, request.Name,
                                    request.Description, request.City,
                                    request.Color, true,
                                    request.PreviewUrl ?? "", filePath ?? "",
                                    fileType ?? "", fileSize ?? 0,
                                    DateTime.Now
                                    );


            var materialId = await _services.UpdateMaterial(material);

            return Ok(materialId);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<int>> DeleteMaterial(int id)
        {
            var materials = await _services.GetAllMaterials();
            var material = materials.FirstOrDefault(m => m.Id == id);

            if (material != null && !string.IsNullOrEmpty(material.FilePath))
            {
                await _fileService.DeleteFileAsync(material.FilePath);
            }

            return Ok(await _services.DeleteMaterial(id));
        }
    }
}
