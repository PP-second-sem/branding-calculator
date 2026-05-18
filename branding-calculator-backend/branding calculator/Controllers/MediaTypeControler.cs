using branding_calculator.Contracts.Types;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace branding_calculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MediaTypeControler : ControllerBase
    {
        private readonly IServices<MediaType> _service;

        public MediaTypeControler(IServices<MediaType> service)
        {
            _service = service;
        }

        [HttpGet("all")]
        public async Task<ActionResult<MediaType>> GetAll()
        {
            return Ok(await _service.GetAllEntities());
        }

        [HttpDelete]
        public async Task<ActionResult<int>> Delete(int id)
        {
            return Ok(await _service.DeleteEntity(id));
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateType(TypeRequest request)
        {
            var type = new MediaType(0,
                                     request.CategoryId,
                                     request.Name,
                                     request.ParameterSchema,
                                     request.SortOrder,
                                     true);

            await _service.CreateEntity(type);

            return Ok(type.Id);
        }

        [HttpPatch]
        public async Task<ActionResult<int>> UpdateType(MediaType request)
        {
            return Ok(await _service.UpdateEntity(request));
        }
    }
}
