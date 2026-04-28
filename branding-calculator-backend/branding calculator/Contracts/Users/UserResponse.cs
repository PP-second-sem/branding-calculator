using Yamal.Core.Abstractions;

namespace branding_calculator.Contracts.Users
{
    public record UserResponse
    {
        public UserResponse(int id, string email,
            string firstName, string lastName, string? middleName,
            string phoneNumber, string? organization,
            Role role, bool isActive)
        {
            Id = id;
            Email = email;
            FirstName = firstName;
            LastName = lastName;
            MiddleName = middleName;
            PhoneNumber = phoneNumber;
            Organization = organization;
            Role = role;
            IsActive = isActive;
        }

        public int Id { get; }
        public string Email { get; } = string.Empty; 
        public string FirstName { get; } = string.Empty;
        public string LastName { get; } = string.Empty;
        public string? MiddleName { get; } = string.Empty;
        public string PhoneNumber { get; } = string.Empty;
        public string? Organization { get; } = string.Empty;
        public Role Role { get; } 
        public bool IsActive { get; }
    }
}
