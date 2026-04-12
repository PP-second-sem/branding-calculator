using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface IRepository<T> where T : class
    {
        Task<int> Create(T entity);
        Task<int> Delete(int id);
        Task<List<T>> Get();
        Task<int> Update(T entity);
    }
}