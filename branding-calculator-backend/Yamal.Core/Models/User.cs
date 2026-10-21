using Yamal.Core.Abstractions;

namespace Yamal.Core.Models
{
    public class User
    {

        public User(int id, string login, string password)
        {
            Id = id;
            Login = login;
            Password = password;

        }

        public int Id { get; }

        //Все что заполняет пользователь
        public string Login { get; }
        public string Password { get; }
        
    }
}
