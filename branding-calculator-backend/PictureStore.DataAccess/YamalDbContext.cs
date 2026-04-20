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

        public DbSet<MaterialsEntity> Materials { get; set; }

        public DbSet<UserEntity> Users { get; set; }
    }
}
