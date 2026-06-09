using System.ComponentModel.DataAnnotations;

namespace branding_calculator.Contracts.Users
{
    public class LoginUserRequest
    {
        public LoginUserRequest(string email, string password)
        {
            Email = email;
            Password = password;
        }


        [EmailAddress(ErrorMessage = "Неверный формат email")]
        public string Email { get; } = string.Empty;
        public string Password { get; } = string.Empty;
    }
}
