using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Yamal.Core.Models;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Configurations
{
    internal class MaterialsConfiguration : IEntityTypeConfiguration<MaterialsEntity>
    {
        public void Configure(EntityTypeBuilder<MaterialsEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Category)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(x => x.Name)
                .HasMaxLength(Material.NAME_MAX_LENGTH)
                .IsRequired();

            builder.Property(x => x.Description)
                .HasMaxLength(Material.DESCRIPTION_MAX_LENGTH);

            builder.Property(x => x.City)
                .HasMaxLength(100);

            builder.Property(x => x.Color)
                .HasMaxLength(50);

            builder.Property(x => x.IsDownloadable)
                .IsRequired();

            builder.Property(x => x.PreviewUrl)
                .HasMaxLength(Material.PREVIEW_URL_MAX_LENGTH);

            builder.Property(x => x.FilePath)
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(x => x.FileType)
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(x => x.FileSize)
                .IsRequired();

            builder.Property(x => x.CreatedAt)
                .IsRequired();



        }
    }
}
