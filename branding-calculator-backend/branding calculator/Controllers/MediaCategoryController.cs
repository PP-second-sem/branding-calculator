using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using branding_calculator.Contracts.MediaCategories;
using Yamal.Core.Models;
using Yamal.Core.Abstractions;

namespace branding_calculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MediaCategoryController : ControllerBase
    {
        private readonly IServices<MediaCategory> _service;
        
        public MediaCategoryController(IServices<MediaCategory> service) => _service = service;

        [HttpGet]
        public async Task<ActionResult<List<MediaCategory>>> GetAll()
        {
            var response =  await _service.GetAllEntities();
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateCategory(CategoryRequest request)
        {
            var category = new MediaCategory(0,
                                             request.Name,
                                             request.Description,
                                             request.BgColor,
                                             request.SortOrder,
                                             request.IsActive);
            return await _service.CreateEntity(category);
        }

        [HttpDelete]
        public async Task<ActionResult<int>> DeleteCategory(int id)
        {
            return await _service.DeleteEntity(id);
        }

        [HttpPatch]
        public async Task<ActionResult<int>> PatchCategory(CategoryRequest request)
        {
            var category = new MediaCategory(0,
                                             request.Name,
                                             request.Description,
                                             request.BgColor,
                                             request.SortOrder,
                                             request.IsActive);
            return await _service.UpdateEntity(category);
        }

    }
}
