using BookStore.Core.Models;
using Microsoft.EntityFrameworkCore;
using PictureStore.DataAccess.Entites;

namespace Yamal.DataAccess.Repositories
{
    public class MaterialRepository : IRepository<Material>
    {
        private readonly YamalDbContext _context;

        public MaterialRepository(YamalDbContext context) { _context = context; }

        public async Task<int> Create(Material entity)
        {
            var materialEntity = new MaterialsEntity()
            {
                CategoryId = entity.CategoryId,
                SphereId = entity.SphereId,
                Name = entity.Name,
                Description = entity.Description,
                PreviesUrl = entity.PreviesUrl,
                UpdateAt = entity.UpdateAt,
                IsDownloadable = entity.IsDownloadable,
            };

            await _context.Materials.AddAsync(materialEntity);
            await _context.SaveChangesAsync();

            return materialEntity.Id;

        }

        public async Task<int> Delete(int id)
        {
            await _context.Materials
                .Where(e => e.Id == id)
                .ExecuteDeleteAsync();

            return id;
        }

        public async Task<List<Material>> Get()
        {
            return await _context.Materials
                .AsNoTracking()
                .Select(c => Material.Create(c.Id, c.CategoryId, c.SphereId,
                c.Name, c.Description, c.PreviesUrl, c.UpdateAt, c.IsDownloadable).Materil)
                .ToListAsync();
        }

        public async Task<int> Update(Material entity)
        {
            await _context.Materials
                .Where(x => x.Id == entity.Id)
                .ExecuteUpdateAsync(e => e
                .SetProperty(p => p.CategoryId, entity.CategoryId)
                .SetProperty(p => p.SphereId, entity.SphereId)
                .SetProperty(p => p.Name, entity.Name)
                .SetProperty(p => p.Description, entity.Description)
                .SetProperty(p => p.PreviesUrl, entity.PreviesUrl)
                .SetProperty(p => p.UpdateAt, entity.UpdateAt)
                .SetProperty(p => p.IsDownloadable, entity.IsDownloadable));

            return entity.Id;
        }
    }
}
