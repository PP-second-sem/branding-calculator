using Yamal.Core.Abstractions;

namespace Yamal.Core.Models
{
    public class User
    {

        public User(int id, string login, string password, Role role)
        {
            Id = id;
            Login = login;
            Password = password;
            Role = role;

        }

        //Все что заполняет пользователь
        public int Id { get; }
        public string Login { get; }
        public string Password { get; }
        
        // Для внутреней работы с сервисом
        public Role Role { get; private set; }


        //validation
        public static (User user, string error) Create(int id, string login, string password, Role role)
        {
            var error = string.Empty;

            if (password is null || password == string.Empty)
            {
                error = "Password can't be null";
            }

            if (login is null || login == string.Empty)
            {
                error = "Login can't be null";
            }

            var user = new User(id, login, password, role);
            return (user, error);
        }

        public void ChangeRole(Role role)
        {
            if (!Enum.GetNames(typeof(Role)).Contains(role.ToString()))
                throw new ArgumentException("Service haven't this role");

            Role = role;
        }
    }
}
