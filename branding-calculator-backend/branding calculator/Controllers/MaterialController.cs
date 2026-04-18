using branding_calculator.Contracts;
using Microsoft.AspNetCore.Mvc;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace branding_calculator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MaterialController : ControllerBase
    {
        private readonly IServices<Material> _services;

        public MaterialController(IServices<Material> services) { _services = services; }

        [HttpGet]
        public async Task<ActionResult<List<MaterialResponse>>> GetMaterials()
        {
            var materials = await _services.GetAllMaterials();

            var response = materials.Where(m => m.IsDownloadable).Select(m => new MaterialResponse(m.Id, m.Category,
                                                                m.Sphere, m.Name,
                                                                m.Description, m.City,
                                                                m.Color, m.PreviewUrl,
                                                                m.FilePath, m.FilePath,
                                                                m.FileSize));
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateMaterial([FromBody] MaterialRequest request)
        {
            var (material, error) = Material.Create(0, request.Category,
                request.Sphere, request.Name,
                request.Description, request.City,
                request.Color, true,
                request.PreviewUrl, request.FilePath,
                request.FileType, request.FileSize,
                DateTime.Now
                );
            if (!string.IsNullOrEmpty(error)) return BadRequest(error);

            var materialId = await _services.CreateMaterial(material);

            return Ok(materialId);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<int>> UpdateMaterial(int id, [FromBody] MaterialRequest request)
        {
            var (material, error) = Material.Create(id, request.Category,
                                    request.Sphere, request.Name,
                                    request.Description, request.City,
                                    request.Color, true,
                                    request.PreviewUrl, request.FilePath,
                                    request.FileType, request.FileSize,
                                    DateTime.Now
                                    );


            var materialId = await _services.UpdateMaterial(material);

            return Ok(materialId);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<int>> DeleteMaterial(int id)
        {
            return Ok(await  _services.DeleteMaterial(id));
        }
    }
}
