using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Yamal.Core.Models;

namespace Yamal.DataAccess.Entites
{
    public class UserEntity
    {
        public UserEntity() { }

        public UserEntity(User user)
        {
            Id = user.Id;
            Email = user.Email;
            PasswordHash = user.PasswordHash;
            FirstName = user.FirstName;
            LastName = user.LastName;
            MiddleName = user.MiddleName;
            PhoneNumber = user.PhoneNumber;
            Organization = user.Organization;
            Role = user.Role.ToString();
            IsActive = user.IsActive;
        }
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        [Column("password_hash")]
        public string PasswordHash { get; set; } = string.Empty;
        [Column("first_name")]
        public string FirstName { get; set; } = string.Empty;
        [Column("last_name")]
        public string LastName { get; set; } = string.Empty;
        [Column("middle_name")]
        public string? MiddleName { get; set; } = string.Empty;
        [Column("phone_number")]
        public string PhoneNumber { get; set; } = string.Empty;
        public string? Organization { get; set; } = string.Empty;
        public string Role { get; set; } = "user";
        [Column("is_active")]
        public bool IsActive { get; set; }
    }
}
