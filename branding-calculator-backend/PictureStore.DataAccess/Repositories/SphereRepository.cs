using Yamal.Core.Models;
using PictureStore.DataAccess.Entites;
using Microsoft.EntityFrameworkCore;


namespace Yamal.DataAccess.Repositories
{
    public class SphereRepository : IRepository<Sphere>
    {
        private readonly YamalDbContext _context;


        public SphereRepository(YamalDbContext context)
        {
            _context = context;
        }

        public async Task<int> Create(Sphere entity)
        {
            var sphereEntity = new SpheresEntity()
            {
                Name = entity.Name,
                Code = entity.Code,
            };

            await _context.Spheres.AddAsync(sphereEntity);
            await _context.SaveChangesAsync();

            return sphereEntity.Id;
        }

        public async Task<int> Delete(int id)
        {
            await _context.Spheres
                .Where(b => b.Id == id)
                .ExecuteDeleteAsync();
            return id;
        }

        public async Task<List<Sphere>> Get()
        {
            return await _context.Spheres
                .AsNoTracking()
                .Select(c => Sphere.Create(c.Id, c.Name, c.Code).Sphere)
                .ToListAsync();
        }

        public async Task<int> Update(Sphere entity)
        {
            await _context.Spheres
                  .Where(x => x.Id == entity.Id)
                  .ExecuteUpdateAsync(e => e
                  .SetProperty(p => p.Name, entity.Name)
                  .SetProperty(p => p.Code, entity.Code));
            return entity.Id;
        }
    }
}
