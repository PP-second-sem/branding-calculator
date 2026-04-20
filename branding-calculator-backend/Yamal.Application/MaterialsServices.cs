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

        public async Task<List<Material>> GetAllEntities()
        {
            return await _materialsRepository.Get();
        }

        public async Task<int> CreateEntity(Material material)
        {
            return await _materialsRepository.Create(material);
        }

        public async Task<int> UpdateEntity(Material material)
        {
            return await _materialsRepository.Update(material);
        }

        public async Task<int> DeleteEntity(int id)
        {
            return await _materialsRepository.Delete(id);
        }


    }
}
