using System.ComponentModel.DataAnnotations;

namespace branding_calculator.Contracts.Users
{
    public record LoginUserRequest(string Email, string Password)
    {
    }
}
