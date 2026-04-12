using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace Yamal.Application
{
    public class MaterialsServices : IServices<Material>
    {
        private readonly IRepository<Material> _materialsRepository;

        public MaterialsServices(IRepository<Material> materialRepository)
        {
            _materialsRepository = materialRepository;
        }

        public async Task<List<Material>> GetAllMaterials()
        {
            return await _materialsRepository.Get();
        }

        public async Task<int> CreateMaterial(Material material)
        {
            return await _materialsRepository.Create(material);
        }

        public async Task<int> UpdateMaterial(Material material)
        {
            return await _materialsRepository.Update(material);
        }

        public async Task<int> DeleteMaterial(int id)
        {
            return await _materialsRepository.Delete(id);
        }


    }
}
