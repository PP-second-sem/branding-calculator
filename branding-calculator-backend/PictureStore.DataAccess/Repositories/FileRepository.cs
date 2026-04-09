using Microsoft.EntityFrameworkCore;
using PictureStore.DataAccess.Entites;
using Yamal.Core.Models;

namespace Yamal.DataAccess.Repositories
{
    public class FileRepository : IRepository<Core.Models.File>
    {
        private readonly YamalDbContext _context;

        public FileRepository(YamalDbContext context) { _context = context; }

        public async Task<List<Core.Models.File>> Get()
        {
            return await _context.Files
                    .AsNoTracking()
                    .Select(f => Core.Models.File.Create(f.Id, f.MaterialId,
                    f.FilePath, f.FileType,
                    f.FileSize, f.CreatedAt).File)
                    .ToListAsync();
        }

        public async Task<int> Create(Core.Models.File file)
        {
            var fileEntity = new FilesEntity
            {
                MaterialId = file.MaterialId,
                FilePath = file.FilePath,
                FileType = file.FileType,
                FileSize = file.FileSize,
                CreatedAt = file.CreatedAt,
            };


            await _context.Files.AddAsync(fileEntity);
            await _context.SaveChangesAsync();

            return fileEntity.Id;
        }

        public async Task<int> Update(Core.Models.File entity)
        {
            await _context.Files
                .Where(b => b.Id == entity.Id)
                .ExecuteUpdateAsync(e => e
                .SetProperty(p => p.MaterialId, entity.MaterialId)
                .SetProperty(p => p.FilePath, entity.FilePath)
                .SetProperty(p => p.FileType, entity.FileType)
                .SetProperty(p => p.FileSize, entity.FileSize)
                .SetProperty(p => p.CreatedAt, entity.CreatedAt));


            return entity.Id;
        }

        public async Task<int> Delete(int id)
        {
            await _context.Files
                .Where(b => b.Id == id)
                .ExecuteDeleteAsync();

            return id;
        }
    }
}
