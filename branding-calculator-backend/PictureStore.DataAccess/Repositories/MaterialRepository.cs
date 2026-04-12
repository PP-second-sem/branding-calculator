using Microsoft.EntityFrameworkCore;
using Yamal.DataAccess.Entites;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;

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
                Category = entity.Category,
                Sphere = entity.Sphere,
                Name = entity.Name,
                Description = entity.Description,
                City = entity.City,
                Color = entity.Color,
                IsDownloadable = entity.IsDownloadable,
                PreviewUrl = entity.PreviewUrl,
                FilePath = entity.FilePath,
                FileType = entity.FileType,
                FileSize = entity.FileSize,
                CreatedAt = entity.CreatedAt,
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
                .Select(c => Material.Create(c.Id, c.Category,
                c.Sphere,
                c.Name, c.Description,
                c.City, c.Color,
                c.IsDownloadable, c.PreviewUrl,
                c.FilePath, c.FileType,
                c.FileSize, c.CreatedAt).Materil)
                .ToListAsync();
        }

        public async Task<int> Update(Material entity)
        {
            await _context.Materials
                .Where(x => x.Id == entity.Id)
                .ExecuteUpdateAsync(e => e
                .SetProperty(p => p.Category, entity.Category)
                .SetProperty(p => p.Name, entity.Name)
                .SetProperty(p => p.Description, entity.Description)
                .SetProperty(p => p.City, entity.City)
                .SetProperty(p => p.Color, entity.Color)
                .SetProperty(p => p.IsDownloadable, entity.IsDownloadable)
                .SetProperty(p => p.PreviewUrl, entity.PreviewUrl)
                .SetProperty(p => p.FilePath, entity.FilePath)
                .SetProperty(p => p.FileType, entity.FileType)
                .SetProperty(p => p.FileSize, entity.FileSize)
                .SetProperty(p => p.CreatedAt, entity.CreatedAt));

            return entity.Id;
        }
    }
}
