using branding_calculator.Contracts.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Yamal.Core.Abstractions;

namespace branding_calculator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUsersServices _usersService;

        public UserController(IUsersServices usersService)
        {
            _usersService = usersService;
        }
        

        [HttpPost("register")]
        public async Task<ActionResult<int>> Register([FromBody] RegistrationUserRequest request)
        {
            if (request == null)
                return BadRequest("Invalid request data");

            var (user, error) = Yamal.Core.Models.User.Create(0,
                request.Login, 
                request.Password, 
                Role.User);

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
            if (string.IsNullOrEmpty(request.Login) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest("Email and password are required");
            }

            // 2. Попытка входа
            // Предположим, что сервис возвращает токен или бросает исключение / возвращает null при ошибке
            var token = await _usersService.Auth(request.Login, request.Password);

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
                user = request.Login

            });
        }

        [HttpPatch("change-role")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> ChangeUserRole([FromBody] ChangeRoleRequest request)
        {
        
            var users = await _usersService.GetAllUser();
            var user = users.FirstOrDefault(x => x.Login == request.Login);

            if (user == null)
                return NotFound($"User with Login {request.Login} not found");
            
            user.ChangeRole(request.Role);

            await _usersService.UpdateEntity(user);
        
            return Ok(new
            {
                message = "Change role successful",
                user = request.Login
            });
        }

        [HttpPost("exit")]
        public async Task<IActionResult> Exit()
        {
            var token = HttpContext.Request.Cookies["MegaCookies"];

            if (!string.IsNullOrEmpty(token))
            {
                HttpContext.Response.Cookies.Delete("MegaCookies");

            }

            return Ok(new
            {
                status = "success",
                message = "Successfully logged out"
            });
        }


    }
}