using Microsoft.EntityFrameworkCore;
using PictureStore.DataAccess.Entites;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

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
