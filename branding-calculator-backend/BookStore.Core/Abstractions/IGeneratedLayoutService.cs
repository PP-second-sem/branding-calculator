using Yamal.Core.Models;

namespace Yamal.Application
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