using branding_calculator.Contracts.Questions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;


namespace branding_calculator.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionServices _services;
        //private readonly IUsersServices _userService;

        public QuestionController(IQuestionServices services, IUsersServices userService)
        {
            //_userService = userService;
            _services = services;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<QuestionResponse>>> GetQuestions()
        {
            var questions = await _services.GetAllEntities();

            var response = questions.Select(q => new QuestionResponse(
                q.Id,
                q.UserName,
                q.UserEmail,
                q.Title,
                q.UserQuestion,
                q.CreatedAt
                ));

            return Ok(response);
        }

        [HttpGet("{id:int}/GetByID")]
        public async Task<ActionResult<QuestionResponse>> GetQuestion(int id)
        {
            var question = await _services.GetByIdQuestion(id);
            if (question == null) return NotFound($"Question with ID {id} not found");

            var response = new QuestionResponse(question.Id,
                question.UserName,
                question.UserEmail,
                question.Title,
                question.UserQuestion,
                question.CreatedAt );
            return Ok(response);
        }
        
        [HttpDelete("{id:int}")]
        [Authorize(Roles="Admin")]
        public async Task<ActionResult<int>> DeleteQuestion(int id)
        {
            var question = await _services.GetByIdQuestion(id);
            if (question == null) return NotFound($"Question with ID {id} not found");

            return await _services.DeleteEntity(id);
        }
        
        [HttpPost("CreateQuestion")]
        public async Task<ActionResult<int>> CreateQuestion([FromBody] QuestionCreateRequest request)
        {
            if (request.UserName is null || request.UserEmail is null)
                return BadRequest("Username or Email can't be empty");
            if (request.Title == null || request.UserQuestion == null)
                return BadRequest($"Title or Question can't be empty");
            var question = new Question(0,  request.UserName, request.UserEmail, request.Title,
                request.UserQuestion, DateTime.Now);
            return await _services.CreateEntity(question);
        }

        /*[HttpPatch("AnwserQuestion")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<int>> CreateAnswer(int id, string answer)
        {
            var question = await _services.GetByIdQuestion(id);
            if (question == null) return BadRequest("Question not found");
            var answeredQuestion = new Question(question.Id,
                                                question.UserName,
                                                question.UserEmail,
                                                question.Title,
                                                answer,
                                                false,
                                                question.CreatedAt,
                                                DateTime.Now);
            return await _services.UpdateEntity(answeredQuestion);

        }



        private int GetUserIdFromToken()
        {
            var userIdClaim = User.FindFirst("userId") ??      // Ваш кастомный claim
                              User.FindFirst(ClaimTypes.NameIdentifier) ??  // Стандартный
                              User.FindFirst("sub");           // Стандартный OpenID Connect

            if (userIdClaim == null)
                throw new UnauthorizedAccessException("Токен не содержит userId");

            if (!int.TryParse(userIdClaim.Value, out var userId))
                throw new UnauthorizedAccessException("Неверный формат userId в токене");

            return userId;
        }*/



    }
}
