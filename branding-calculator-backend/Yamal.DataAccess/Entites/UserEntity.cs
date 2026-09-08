using System.ComponentModel.DataAnnotations.Schema;
using Yamal.Core.Models;

namespace Yamal.DataAccess.Entites
{
    public class UserEntity
    {
        public UserEntity() { }

        public UserEntity(User user)
        {
            Id = user.Id;
            Login = user.Login;
            PasswordHash = user.Password;
            Role = user.Role.ToString();
        }
        public int Id { get; set; }
        public string Login { get; set; }
        [Column("password_hash")]
        public string PasswordHash { get; set; } = string.Empty;
        public string Role { get; set; } = "user";

        public ICollection<QuestionsEntity> Questions { get; set; }
        
    }
}
