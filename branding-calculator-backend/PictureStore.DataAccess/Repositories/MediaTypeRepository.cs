using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
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
            var type = new MediaType(entity.Id, entity.CategoryId,
                entity.Name, entity.ParametersSchema,
                entity.SortOrder, entity.IsActive);

            await _context.AddAsync(type);
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
                                           m.ParametersSchema,
                                           m.SortOrder,
                                           m.IsActive))
                .ToListAsync();

        }

        public async Task<int> Update(MediaType entity)
        {
            await _context.MediaTypes
                .ExecuteUpdateAsync(e => e
                .SetProperty(p => p.Name, entity.Name)
                .SetProperty(p => p.ParametersSchema, entity.ParametersSchema)
                .SetProperty(p => p.SortOrder, entity.SortOrder)
                .SetProperty(p => p.CategoryId, entity.CategoryId));
            return entity.Id;
            
        }
    }
}
