using System.ComponentModel.DataAnnotations;

namespace branding_calculator.Contracts.Users
{
    public class LoginUserRequest
    {
        public LoginUserRequest(string login, string password)
        {
            Login = login;
            Password = password;
        }

        
        public string Login { get; } = string.Empty;
        public string Password { get; } = string.Empty;
    }
}
