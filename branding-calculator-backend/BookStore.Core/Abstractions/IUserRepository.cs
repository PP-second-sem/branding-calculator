using Yamal.Core.Models;

namespace Yamal.DataAccess.Repositories
{
    public interface IUserRepository
    {
        Task<int> Create(User entity);
        Task<int> Delete(int id);
        Task<List<User>> GetAll();
        Task<User> GetByEmail(string email);
        Task<int> Update(User entity);
    }
}