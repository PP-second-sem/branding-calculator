using branding_calculator.Contracts;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Yamal.Application;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;

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

            var response = new UserResponse(user.Id, user.Email, user.Password,
                user.FirstName, user.LastName,
                user.MiddleName, user.PhoneNumber,
                user.Organization, user.Role, user.IsActive);

            return Ok(response);
        }




        //[HttpPost]
        //public async Task<ActionResult<UserRequest>> Login(string)
        //{



        //}
            
    }
}
