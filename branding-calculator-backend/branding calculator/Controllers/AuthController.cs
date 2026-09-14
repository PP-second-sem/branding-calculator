using branding_calculator.Contracts.Auth;
using Microsoft.AspNetCore.Mvc;
using Yamal.Application;
using Yamal.Core.Abstractions;

namespace branding_calculator.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUsersServices _usersService;

        public AuthController(IUsersServices userService)
        {
            _usersService = userService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] AuthUserRequest request)
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


        [HttpPost("logout")]
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

        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh()
        {

            return Ok();
        }


    }
}
