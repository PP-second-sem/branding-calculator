using Yamal.Core.Models;
using Yamal.DataAccess.Repositories;


namespace Yamal.Application
{
    public class GeneratedLayoutService : IGeneratedLayoutService
    {
        private readonly IGeneratedLayoutRepository _repository;

        public GeneratedLayoutService(IGeneratedLayoutRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<GeneratedLayout>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task<GeneratedLayout> GetById(int id)
        {
            return await _repository.GetLayoutById(id);
        }

        public async Task<int> Delete(int id)
        {
            return await _repository.Delete(id);
        }

        public async Task<int> Update(GeneratedLayout layout)
        {
            return await _repository.Update(layout);
        }

        public async Task<int> Create(GeneratedLayout entity)
        {
            return await _repository.Create(entity);
        }

    }
}
