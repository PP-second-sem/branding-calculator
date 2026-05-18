using branding_calculator.Contracts.Questions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Yamal.Application;
using Yamal.Core.Models;


namespace branding_calculator.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionServices _services;
        private readonly IUsersServices _userService;

        public QuestionController(IQuestionServices services, IUsersServices userService) {
            _userService = userService;
            _services = services;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<QuestionResponse>>> GetQuestions()
        {
            var questions = await _services.GetAllEntities();

            var response = questions.Select(q => new QuestionResponse(q.Id,
                q.UserId,
                q.Title,
                q.UserQuestion,
                q.AdminResponse,
                q.IsActive,
                q.CreatedAt,
                q.AnsweredAt));

            return Ok(response);
        }

        [HttpGet("{id:int}/GetByID")]
        public async Task<ActionResult<QuestionResponse>> GetQuestion(int id)
        {
            var question = await _services.GetByIdQuestion(id);
            if (question == null) return NotFound($"Question with ID {id} not found");

            var response = new QuestionResponse(question.Id,
                question.UserId,
                question.Title,
                question.UserQuestion,
                question.AdminResponse,
                question.IsActive,
                question.CreatedAt,
                question.AnsweredAt);
            return Ok(response);
        }

        [HttpGet("{userId:int}/GetUserQuestions")]
        public async Task<ActionResult<List<QuestionResponse>>> GetUserQuestions(int userId)
        {

            var userQuestions = await _services.GetUserQuestions(userId);
            if (userQuestions == null) return NotFound("The user has no questions");
            var response = userQuestions.Select(q => new QuestionResponse(
                q.Id,
                q.UserId,
                q.Title,
                q.UserQuestion,
                q.AdminResponse,
                q.IsActive,
                q.CreatedAt,
                q.AnsweredAt));
            return response.ToList();

        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<int>> DeleteQuestion(int id)
        {
            var question = await _services.GetByIdQuestion(id);
            if (question == null) return NotFound($"Question with ID {id} not found");

            return await _services.DeleteEntity(id);
        }



        [HttpPost("CreateQuestion")]
        public async Task<ActionResult<int>> CreateQuestion([FromBody] QuestionCreateRequest request)
        {

            if (request.Title == null || request.UserQuestion == null)
                return BadRequest($"Title or Question can't be empty");
            var userId = GetUserIdFromToken();
            var question = new Question(0, userId, request.Title,
                request.UserQuestion, null, true,
                DateTime.Now, null);
            return await _services.CreateEntity(question);
        }

        [HttpPatch("AnwserQuestion")]
        public async Task <ActionResult<int>> CreateAnswer(int id, string answer)
        {
            var question = await _services.GetByIdQuestion(id);
            if (question == null) return BadRequest("Question not found");
            var answeredQuestion = new Question(question.Id,
                                                question.UserId,
                                                question.Title,
                                                question.UserQuestion,
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
        }



    }
}
