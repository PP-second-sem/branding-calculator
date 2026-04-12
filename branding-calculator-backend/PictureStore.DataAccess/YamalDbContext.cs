using Microsoft.EntityFrameworkCore;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess
{
    public class YamalDbContext : DbContext
    {

        public YamalDbContext(DbContextOptions<YamalDbContext> options)
            : base(options)
        {

        }

        public DbSet<CategoriesEntity> Category { get; set; }

        public DbSet<FilesEntity> Files { get; set; }

        public DbSet<MaterialsEntity> Materials { get; set; }

        public DbSet<SpheresEntity> Spheres { get; set; }

    }
}
