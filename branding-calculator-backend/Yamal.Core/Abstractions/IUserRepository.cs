using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface IUserRepository
    {
        Task<int> Create(User entity);
        Task<int> Delete(int id);
        Task<List<User>> GetAll();
        Task<User> GetByEmail(string email);
        Task<int> Update(User entity);
        Task<User> GetById(int id);

    }
}