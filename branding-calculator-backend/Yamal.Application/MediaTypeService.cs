using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace Yamal.Application
{
    public class MediaTypeService : IServices<MediaType>
    {
        private readonly IRepository<MediaType> _repository;
        public async Task<int> CreateEntity(MediaType entity)
        {
            return await _repository.Create(entity);
        }

        public async Task<int> DeleteEntity(int id)
        {
            return await _repository.Delete(id);
        }

        public async Task<List<MediaType>> GetAllEntities()
        {
            return await _repository.Get();
        }

        public async Task<int> UpdateEntity(MediaType entity)
        {
            return await _repository.Update(entity);
        }
    }
}
