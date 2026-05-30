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

        [HttpGet("GetAll")]
        public async Task<ActionResult<MediaType>> GetAll()
        {
            return Ok(await _service.GetAllEntities());
        }

        [HttpDelete("{id:int}/Delete")]
        public async Task<ActionResult<int>> Delete(int id)
        {
            return Ok(await _service.DeleteEntity(id));
        }

        [HttpPost("Create")]
        public async Task<ActionResult<int>> CreateType(TypeRequest request)
        {
            if (request == null)
                return BadRequest(new { error = "Request body is required" });

            var type = new MediaType(
                0,
                request.CategoryId,
                request.Name,
                string.IsNullOrWhiteSpace(request.ParameterSchema) ? "{}" : request.ParameterSchema,
                request.SortOrder,
                true
            );

            var createdId = await _service.CreateEntity(type);
            return Ok(createdId);
        }

        [HttpPatch("Update")]
        public async Task<ActionResult<int>> UpdateType(MediaType request)
        {
            return Ok(await _service.UpdateEntity(request));
        }
    }
}
