using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface IUsersServices
    {
        Task<int> CreateUser(User user);
        Task<int> DeleteUser(int id);
        Task<List<User>> GetAllUser();
        Task<int> UpdateEntity(User user);
        Task<string> Auth(string login, string password);
        Task<User> GetUserById(int id);
        
    }
}