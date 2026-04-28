using Yamal.Core.Abstractions;

namespace branding_calculator.Contracts.Users
{
    public record RegistrationUserRequest
    {
        public RegistrationUserRequest(string email, string password,
            string firstName, string lastName, string? middleName,
            string phoneNumber, string? organization, bool isActive)
        {
            Email = email;
            Password = password;
            FirstName = firstName;
            LastName = lastName;
            MiddleName = middleName;
            PhoneNumber = phoneNumber;
            Organization = organization;
            IsActive = isActive;
        }

        public string Email { get; } = string.Empty;
        public string Password { get; } = string.Empty;
        public string FirstName { get; } = string.Empty;
        public string LastName { get; } = string.Empty;
        public string? MiddleName { get; } = string.Empty;
        public string PhoneNumber { get; } = string.Empty;
        public string? Organization { get; } = string.Empty;
        public bool IsActive { get; }
    }
}
