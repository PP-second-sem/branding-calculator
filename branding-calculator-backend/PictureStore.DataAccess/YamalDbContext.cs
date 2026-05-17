using Microsoft.EntityFrameworkCore;
using System.Reflection;
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

        public DbSet<QuestionsEntity> Questions { get; set; }

        public DbSet<LogoLibraryEntity> LogoLibrary { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(modelBuilder);
        }
    }
}
