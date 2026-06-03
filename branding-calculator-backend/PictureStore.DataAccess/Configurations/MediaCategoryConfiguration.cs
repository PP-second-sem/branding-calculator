using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Configurations
{
    public class MediaCategoryConfiguration : IEntityTypeConfiguration<MediaCategoriesEntity>
    {
        public void Configure(EntityTypeBuilder<MediaCategoriesEntity> builder)
        {
            builder.HasKey(x =>  x.Id);

            builder.Property(x => x.Name)
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(x => x.Description)
                .HasMaxLength(300);

            builder.Property(x => x.BgColor)
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(x => x.SortOrder)
                .IsRequired();

            builder.Property(x => x.IsActive)
                .IsRequired();

            builder.HasMany(c => c.Types)
                .WithOne(t => t.Category)
                .HasForeignKey(t => t.CategoryId)
                .OnDelete(DeleteBehavior.Cascade);

        }
    }
}
