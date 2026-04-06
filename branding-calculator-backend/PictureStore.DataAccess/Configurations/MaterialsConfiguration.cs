using BookStore.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PictureStore.DataAccess.Entites;

namespace Yamal.DataAccess.Configurations
{
    internal class MaterialsConfiguration : IEntityTypeConfiguration<MaterialsEntity>
    {
        public void Configure(EntityTypeBuilder<MaterialsEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .HasMaxLength(Material.NAME_MAX_LENGTH)
                .IsRequired();

            builder.Property(x => x.Description)
                .HasMaxLength(Material.DESCRIPTION_MAX_LENGTH);

            builder.Property(x => x.IsDownloadable)
                .IsRequired();

            builder.Property(x => x.PreviesUrl)
                .HasMaxLength(Material.PREVIEW_URL_MAX_LENGTH);

            builder.Property(x => x.UpdateAt)
                .IsRequired();
        }
    }
}
