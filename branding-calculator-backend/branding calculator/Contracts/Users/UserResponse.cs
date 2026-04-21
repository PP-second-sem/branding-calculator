namespace branding_calculator.Contracts.Users
{
    public record UserResponse
    {
        public UserResponse(int id, string email, string password,
            string firstName, string lastName, string? middleName,
            string phoneNumber, string? organization,
            string role, bool isActive)
        {
            Id = id;
            Email = email;
            Password = password;
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
        public string Password { get; } = string.Empty;
        public string FirstName { get; } = string.Empty;
        public string LastName { get; } = string.Empty;
        public string? MiddleName { get; } = string.Empty;
        public string PhoneNumber { get; } = string.Empty;
        public string? Organization { get; } = string.Empty;
        public string Role { get; } = string.Empty;
        public bool IsActive { get; }
    }
}
