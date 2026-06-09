using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface IGeneratedLayoutService
    {
        Task<int> Delete(int id);
        Task<List<GeneratedLayout>> GetAll();
        Task<GeneratedLayout> GetById(int id);
        Task<int> Update(GeneratedLayout layout);
        Task<int> Create(GeneratedLayout entity);
    }
}