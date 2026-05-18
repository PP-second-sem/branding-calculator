using System;
using System.Collections.Generic;
using System.Text;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace Yamal.Application
{
    public class MediaCategoryService : IServices<MediaCategory>
    {
        private readonly IRepository<MediaCategory> _repository;

        public MediaCategoryService(IRepository<MediaCategory> repository)
        {
            _repository = repository;
        }

        public async Task<int> CreateEntity(MediaCategory entity)
        {
            return await _repository.Create(entity);
        }

        public Task<int> DeleteEntity(int id)
        {
            return _repository.Delete(id);
        }

        public Task<List<MediaCategory>> GetAllEntities()
        {
            return _repository.Get();
        }

        public Task<int> UpdateEntity(MediaCategory entity)
        {
            return _repository.Update(entity);
        }
    }
}
