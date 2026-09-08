using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace branding_calculator.Contracts.Users
{
    public record RegistrationUserRequest
    {
        public RegistrationUserRequest(string login, string password)
        {
            Password = password;
        }

        [PasswordPropertyText]
        public string Password { get; } = string.Empty;
        
        public string Login { get; } = string.Empty;
    }
}
