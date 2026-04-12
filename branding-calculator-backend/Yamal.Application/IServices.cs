using Yamal.Core.Models;

namespace Yamal.Application
{
    public interface IServices
    {
        Task<int> CreateMaterial(Material material);
        Task<int> DeleteMaterial(int id);
        Task<List<Material>> GetAllMaterials();
        Task<int> UpdateMaterial(Material material);
    }
}