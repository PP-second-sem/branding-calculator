using Microsoft.EntityFrameworkCore;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Repositories
{
    public class MediaCategoryRepository : IRepository<MediaCategory>
    {
        private readonly YamalDbContext _context;

        public MediaCategoryRepository(YamalDbContext context) => _context = context;


        public async Task<int> Create(MediaCategory entity)
        {
            var category = new MediaCategoriesEntity()
            {
                Name = entity.Name,
                Description = entity.Description,
                SortOrder = entity.SortOrder,
                BgColor = entity.BgColor,
                IsActive = entity.IsActive,
            };

            await _context.MediaCategories.AddAsync(category);
            await _context.SaveChangesAsync();
            return category.Id;
        }
        
        public async Task<int> Delete(int id)
        {
            await _context.MediaCategories
                .Where(m => m.Id == id)
                .ExecuteDeleteAsync();
            return id;
        }

        public Task<List<MediaCategory>> Get()
        {
            return _context.MediaCategories
                .AsNoTracking()
                .Select(m => new MediaCategory(m.Id, m.Name,
                m.Description, m.BgColor,
                m.SortOrder, m.IsActive))
                .ToListAsync();
        }

        public async Task<int> Update(MediaCategory entity)
        {
            await _context.MediaCategories
                .Where(x => x.Id == entity.Id)
                .ExecuteUpdateAsync(e => e
                .SetProperty(p => p.Name, entity.Name)
                .SetProperty(p => p.IsActive, entity.IsActive)
                .SetProperty(p => p.SortOrder, entity.SortOrder)
                .SetProperty(p => p.BgColor, entity.BgColor)
                .SetProperty(p => p.Description, entity.Description));

            return entity.Id;
        }
    }
}
