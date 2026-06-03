using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace Yamal.Application
{
    public class LogoLibraryService : IServices<LogoLibrary>
    {
        private readonly IRepository<LogoLibrary> _repository;
        
        public LogoLibraryService(IRepository<LogoLibrary> repository) => _repository = repository;

        public async Task<int> CreateEntity(LogoLibrary entity)
        {
            return await _repository.Create(entity);
        }

        public async Task<int> DeleteEntity(int id)
        {
            return await _repository.Delete(id);
        }

        public async Task<List<LogoLibrary>> GetAllEntities()
        {
            return await _repository.Get();
        }

        public async Task<int> UpdateEntity(LogoLibrary entity)
        {
            return await _repository.Update(entity);
        }
    }
}
