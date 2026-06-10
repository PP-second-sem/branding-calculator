using Yamal.Core.Abstractions;
using Microsoft.AspNetCore.Mvc;
using Yamal.Core.Models;

namespace branding_calculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Statistics : ControllerBase
    {

        public readonly IStatisticsService _service;

        public Statistics (IStatisticsService service)
        {
            _service = service;
        }

        [HttpGet("GetStatistics")]
        public async Task<ActionResult<List<StatisticResponse>>> GetStatistics()
        {
            var response = await _service.GetStatisticsAsync();
            
            if (response == null)
            {
                return NotFound("Statistics not found");
            }

            return Ok(response);
        }
    }

    public class StatisticsResponse
    {
        public int TotalUsers { get; set; }
        public int TotalQuestions { get; set; }
        public int TotalMediaTypes { get; set; }
        // Add more fields as needed for statistics
    }
}
