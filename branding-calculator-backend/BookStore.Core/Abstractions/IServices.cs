using Yamal.Core.Models;

namespace Yamal.Application
{
    public interface IServices<T> where T : class
    {
        Task<int> CreateMaterial(T material);
        Task<int> DeleteMaterial(int id);
        Task<List<T>> GetAllMaterials();
        Task<int> UpdateMaterial(T material);
    }
}