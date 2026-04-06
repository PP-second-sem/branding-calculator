using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PictureStore.DataAccess.Entites;
using Yamal.Core.Models;



namespace Yamal.DataAccess.Configurations
{
    public class CategoriesConfiguration : IEntityTypeConfiguration<CategoriesEntity>
    {
        public void Configure(EntityTypeBuilder<CategoriesEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .HasMaxLength(Category.NAME_MAX_LENGTH)
                .IsRequired();

            builder.Property(x => x.Description)
                .HasMaxLength(Category.DESCRIPTION_MAX_LENGTH);

            builder.Property(x => x).IsRequired();

            builder.Property(x => x).IsRequired();
        }
    }
}
