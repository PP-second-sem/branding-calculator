using Yamal.Core.Abstractions;
using Yamal.DataAccess.Entites;
using Yamal.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Yamal.DataAccess.Repositories
{
    public class LogoLibraryRepository : IRepository<LogoLibrary>
    {
        private readonly YamalDbContext _context;
        public LogoLibraryRepository(YamalDbContext context) => _context = context;
        public async Task<int> Create(LogoLibrary entity)
        {
            var logo = new LogoLibraryEntity()
            {
                FilePath = entity.FilePath,
                FileType = entity.FileType,
                Name = entity.Name,
                SortOrder = entity.SortOrder,
                IsActive = entity.IsActive
            };

            await _context.AddAsync(logo);
            await _context.SaveChangesAsync();

            return logo.Id;
        }

        public async Task<int> Delete(int id)
        {
           await _context.LogoLibrary
                .Where(l => l.Id == id)
                .ExecuteDeleteAsync();
            return id;

        }

        public async Task<List<LogoLibrary>> Get()
        {
            return await _context.LogoLibrary
                .AsNoTracking()
                .Select(l => new LogoLibrary(l.Id, l.Name,
                l.FilePath, l.FileType,
                l.IsActive, l.SortOrder))
                .ToListAsync();
        }

        public async Task<int> Update(LogoLibrary entity)
        {
            await _context.LogoLibrary
                .ExecuteUpdateAsync(e => e
                .SetProperty(p => p.FilePath, entity.FilePath)
                .SetProperty(p => p.FileType, entity.FileType)
                .SetProperty(p => p.IsActive, entity.IsActive)
                .SetProperty(p => p.Name, entity.Name));
            return entity.Id;

        }
    }
}
