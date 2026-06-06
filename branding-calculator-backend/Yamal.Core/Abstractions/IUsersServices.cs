using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface IUsersServices
    {
        Task<int> CreateUser(User user);
        Task<int> DeleteUser(int id);
        Task<List<User>> GetAllUser();
        Task<User> GetUserByEmail(string email);
        Task<int> UpdateEntity(User user);
        Task<string> Login(string email, string password);
        Task<User> GetUserById(int id);
    }
}