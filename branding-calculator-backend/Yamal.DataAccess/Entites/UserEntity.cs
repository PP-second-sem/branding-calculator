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
        }
        public int Id { get; set; }
        public string Login { get; set; }
        [Column("password_hash")]
        public string PasswordHash { get; set; } = string.Empty;
        
    }
}
