using Microsoft.EntityFrameworkCore;
using Yamal.Core.Models;
using Yamal.DataAccess.Entites;
using Yamal.Core.Abstractions;

namespace Yamal.DataAccess.Repositories
{
    public class GeneratedLayoutRepository : IGeneratedLayoutRepository
    {
        private readonly YamalDbContext _context;

        public GeneratedLayoutRepository(YamalDbContext context) => _context = context;

        public async Task<int> Create(GeneratedLayout model)
        {
            var layout = new GeneratedLayoutsEntity()
            {
                UserId = model.Id,
                CarrierTypeId = model.CarrierTypeId,
                ParametersJson = model.ParametersJson,
                PackageUrl = model.PackageUrl,
                OutputFormats = model.OutputFormats,
                CreatedAt = model.CreatedAt,
            };

            await _context.GeneratedLayouts.AddAsync(layout);
            await _context.SaveChangesAsync();

            return layout.Id;
        }

        public async Task<List<GeneratedLayout>> GetAll()
        {
            return await _context.GeneratedLayouts
                .AsNoTracking()
                .Select(x => new GeneratedLayout(x.Id,
                                                 x.UserId,
                                                 x.CarrierTypeId,
                                                 x.ParametersJson,
                                                 x.PackageUrl,
                                                 x.OutputFormats,
                                                 x.CreatedAt))
                .ToListAsync();
        }

        public async Task<GeneratedLayout> GetLayoutById(int id)
        {
            return await _context.GeneratedLayouts
                .AsNoTracking()
                .Where(x => x.Id == id)
                .Select(x => new GeneratedLayout(x.Id,
                                                 x.UserId,
                                                 x.CarrierTypeId,
                                                 x.ParametersJson,
                                                 x.PackageUrl,
                                                 x.OutputFormats,
                                                 x.CreatedAt))
                .FirstOrDefaultAsync();
        }

        public async Task<int> Delete(int id)
        {
            await _context.GeneratedLayouts
                .Where(x => x.Id == id)
                .ExecuteDeleteAsync();

            return id;
        }

        public async Task<int> Update(GeneratedLayout layout)
        {
            await _context.GeneratedLayouts
                .ExecuteUpdateAsync(e => e
                .SetProperty(p => p.ParametersJson, layout.ParametersJson)
                .SetProperty(p => p.PackageUrl, layout.PackageUrl)
                .SetProperty(p => p.OutputFormats, layout.OutputFormats));

            return layout.Id;
        }
    }
}
