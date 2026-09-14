using Microsoft.EntityFrameworkCore;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Repositories
{
    public class MediaTypeRepository : IRepository<MediaType>
    {
        private readonly YamalDbContext _context;

        public MediaTypeRepository(YamalDbContext context) => _context = context;
        public async Task<int> Create(MediaType entity)
        {
            var type = new MediaTypesEntity()
            {
                CategoryId = entity.CategoryId,
                Name = entity.Name,
                TemplatesJson = entity.TemplatesJson,
                ColorSchemesJson = entity.ColorSchemesJson,
                ParametersSchema = entity.ParametersSchema,
                SortOrder = entity.SortOrder,
                IsActive = entity.IsActive
            };

            await _context.MediaTypes.AddAsync(type);
            await _context.SaveChangesAsync();

            return type.Id;
        }

        public async Task<int> Delete(int id)
        {
            await _context.MediaTypes
                .Where(m => m.Id == id)
                .ExecuteDeleteAsync();

            return id;
        }

        public async Task<List<MediaType>> Get()
        {
            return await _context.MediaTypes
                 .AsNoTracking()
                 .Select(m => new MediaType(m.Id,
                                            m.CategoryId,
                                            m.Name,
                                            m.TemplatesJson,
                                            m.ColorSchemesJson,
                                            m.ParametersSchema,
                                            m.SortOrder,
                                            m.IsActive))
                 .ToListAsync();

        }

        public async Task<int> Update(MediaType entity)
        {
            await _context.MediaTypes
                .Where(e => e.Id == entity.Id)
                .ExecuteUpdateAsync(e => e
                .SetProperty(p => p.Name, entity.Name)
                .SetProperty(p => p.TemplatesJson, entity.TemplatesJson)
                .SetProperty(p => p.ColorSchemesJson, entity.ColorSchemesJson)
                .SetProperty(p => p.ParametersSchema, entity.ParametersSchema)
                .SetProperty(p => p.SortOrder, entity.SortOrder)
                .SetProperty(p => p.CategoryId, entity.CategoryId));
            return entity.Id;

        }

    }
}
