using Microsoft.AspNetCore.Mvc;
using branding_calculator.Contracts.Tickets;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace branding_calculator.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class TicketsController : Controller
    {
        private readonly IQuestionServices _services;

        public TicketsController(IQuestionServices service) => _services = service;

        [HttpPost]
        public async Task<ActionResult<int>> CreateQuestion([FromBody] QuestionCreateRequest request)
        {
            if (request.UserEmail is null)
                return BadRequest("Email can't be empty");
            if (request.Title == null || request.UserQuestion == null)
                return BadRequest($"Title or Question can't be empty");
            var question = new Question(0, request.UserEmail, request.Title,
                request.UserQuestion, DateTime.Now);
            return Ok(await _services.CreateEntity(question));
        }

        [HttpGet("/admijn/tickets")]
        public async Task<ActionResult<List<QuestionResponse>>> GetQuestions()
        {
            var questions = await _services.GetAllEntities();

            var response = questions.Select(q => new QuestionResponse(
                q.Id,
                q.UserEmail,
                q.Title,
                q.UserQuestion,
                q.CreatedAt
                ));

            return Ok(response);
        }


        [HttpGet("/admin/tickets/{id:int}")]
        public async Task<ActionResult<QuestionResponse>> GetQuestion([FromQuery]int id)
        {
            var question = await _services.GetByIdQuestion(id);
            if (question == null) return NotFound($"Question with ID {id} not found");

            var response = new QuestionResponse(question.Id,
                question.UserEmail,
                question.Title,
                question.UserQuestion,
                question.CreatedAt);
            return Ok(response);
        }

        [HttpPatch("/admin/tickets/{id:int}/status")]
        public async Task<ActionResult<int>> ChangeStatus()
        {
            return Ok("Return nothing"); 
        }


    }
}
