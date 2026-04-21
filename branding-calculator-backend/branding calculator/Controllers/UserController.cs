using branding_calculator.Contracts.Users;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Yamal.Application;

namespace branding_calculator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUsersServices _usersService;
        private readonly IWebHostEnvironment _environment;

        public UserController(IUsersServices usersService, IWebHostEnvironment environment)
        {
            _usersService = usersService;
            _environment = environment;
        }

        [HttpGet("{email}")]
        public async Task<ActionResult<UserResponse>> GetByEmail(string email)
        {
            var user = await _usersService.GetUserByEmail(email);

            if (user == null)
                return NotFound();

            // ИСПРАВЛЕНО: PasswordHash заменен на null. Никогда не отдавайте хэш клиенту!
            var response = new UserResponse(
                user.Id,
                user.Email,
                null, // <--- Было user.PasswordHash, стало null
                user.FirstName,
                user.LastName,
                user.MiddleName,
                user.PhoneNumber,
                user.Organization,
                user.Role,
                user.IsActive
            );

            return Ok(response);
        }

        [HttpPost("register")]
        public async Task<ActionResult<int>> Register([FromBody] RegistrationUserRequest request)
        {
            if (request == null)
                return BadRequest("Invalid request data");

            var (user, error) = Yamal.Core.Models.User.Create(
                0,
                request.Email,
                request.Password,
                request.FirstName,
                request.LastName,
                request.MiddleName,
                request.PhoneNumber,
                request.Organization,
                request.Role,
                request.IsActive
            );

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var userId = await _usersService.CreateUser(user);
            return Ok(new { id = userId, message = "User registered successfully" });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserRequest request)
        {
            // 1. Валидация входных данных
            if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest("Email and password are required");
            }

            // 2. Попытка входа
            // Предположим, что сервис возвращает токен или бросает исключение / возвращает null при ошибке
            var token = await _usersService.Login(request.Email, request.Password);

            if (string.IsNullOrEmpty(token))
            {
                return Unauthorized("Invalid email or password");
            }

            // 3. Запись токена в Cookie
            // ИСПОЛЬЗУЕМ: HttpContext (свойство контроллера)
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,      // Скрипты не могут прочитать куку (защита от XSS)
                Secure = false,       // true только если у вас HTTPS (локально можно false)
                SameSite = SameSiteMode.Strict,
                Expires = DateTime.UtcNow.AddHours(12)
            };

            HttpContext.Response.Cookies.Append("MegaCookies", token, cookieOptions);

            // 4. Возвращаем ответ
            return Ok(new
            {
                message = "Login successful",
                user = request.Email

            });
        }
    }
}