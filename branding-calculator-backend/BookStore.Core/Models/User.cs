using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace Yamal.Core.Models
{
    public class User
    {

        public User(int id, string email, string password, string firstName,
            string lastName, string? middleNmae, string phoneNumber,
            string? organization, string role, bool isActive)
        {
            Id = id;
            Email = email;
            Password = password;
            FirstName = firstName;
            LastName = lastName;
            MiddleName = middleNmae;
            PhoneNumber = phoneNumber;
            Organization = organization;
            Role = role;
            IsActive = isActive;
        }


        public int Id { get; }
        public string Email { get; } 
        public string Password { get; } 
        public string FirstName { get; } 
        public string LastName { get; } 
        public string? MiddleName { get; } 
        public string PhoneNumber { get; } 
        public string? Organization { get; } 
        public string Role { get; } 
        public bool IsActive { get; }

        //validation
        public static (User user, string error) Create(int id, string email, string password, string firstName,
            string lastName, string? middleNmae, string phoneNumber,
            string? organization, string role, bool isActive)
        {
            var error = string.Empty;

            if (email is null || password is null)
            {
                error = "Email or password can't be null";
            }

            var user = new User(id,email,password,
                firstName,lastName,middleNmae,
                phoneNumber,organization,role,isActive);
            return (user, error);
        }
    }
}
