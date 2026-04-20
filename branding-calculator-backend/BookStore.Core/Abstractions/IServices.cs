using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface IServices<T> where T : class
    {
        Task<int> CreateEntity(T entity);
        Task<int> DeleteEntity(int id);
        Task<List<T>> GetAllEntities();
        Task<int> UpdateEntity(T entity);
    }
}