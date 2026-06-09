using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface IGeneratedLayoutRepository
    {
        Task<int> Create(GeneratedLayout model);
        Task<int> Delete(int id);
        Task<List<GeneratedLayout>> GetAll();
        Task<GeneratedLayout> GetLayoutById(int id);
        Task<int> Update(GeneratedLayout layout);
    }
}