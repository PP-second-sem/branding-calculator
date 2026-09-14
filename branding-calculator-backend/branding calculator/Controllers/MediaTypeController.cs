using branding_calculator.Contracts.Types;
using Microsoft.AspNetCore.Mvc;
using Yamal.Application;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace branding_calculator.Controllers
{
    [Route("admin/carrier-types")]
    [ApiController]
    public class MediaTypeController : ControllerBase
    {
        private readonly IServices<MediaType> _mediaTypeService;
        private readonly ICarrierTypeLogoService _mediaTypeLogoService;

        public MediaTypeController(
            IServices<MediaType> mediaTypeService,
            ICarrierTypeLogoService mediaTypeLogoService)
        {
            _mediaTypeService = mediaTypeService;
            _mediaTypeLogoService = mediaTypeLogoService;
        }

        // ===== Существующие методы (немного причесал маршруты) =====

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MediaType>>> GetAll()
        {
            return Ok(await _mediaTypeService.GetAllEntities());
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _mediaTypeService.DeleteEntity(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateType(TypeRequest request)
        {
            if (request == null)
                return BadRequest(new { error = "Request body is required" });

            var type = new MediaType(
                0,
                request.CategoryId,
                request.Name,
                request.TemplatesJson,
                request.ColorSchemeJson,
                request.ParametersSchema,
                request.SortOrder,
                true
            );

            var createdId = await _mediaTypeService.CreateEntity(type);
            return Ok(createdId);
        }

        [HttpPatch("{id:int}")]
        public async Task<ActionResult<int>> UpdateType(int id, MediaType request)
        {
            return Ok(await _mediaTypeService.UpdateEntity(request));
        }


        [HttpGet("{carrier_type_id:int}/logos")]
        public async Task<ActionResult<List<CarrierTypeLogo>>> GetLogosByCarrierType(int carrier_type_id)
        {
            var logos = await _mediaTypeLogoService.GetByMediaTypeId(carrier_type_id);
            return Ok(logos);
        }

        [HttpPost("{carrier_type_id:int}/logos")]
        public async Task<ActionResult<int>> BindLogo(int carrier_type_id, [FromBody] LogoBindingRequest request)
        {
            if (request == null)
                return BadRequest(new { error = "Request body is required" });

            var createdId = await _mediaTypeLogoService.CreateBinding(
                carrier_type_id,
                request.LogoId,
                request.IsRecommended);

            return Ok(createdId);
        }

        [HttpDelete("{carrier_type_id:int}/logos/{logo_id:int}")]
        public async Task<IActionResult> UnbindLogo(int carrier_type_id, int logo_id)
        {
            var result = await _mediaTypeLogoService.DeleteBinding(carrier_type_id, logo_id);

            if (!result)
                return NotFound(new { message = "Binding not found" });

            return NoContent();
        }
    }
}