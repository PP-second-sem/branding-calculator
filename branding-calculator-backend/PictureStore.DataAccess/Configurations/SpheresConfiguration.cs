using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PictureStore.DataAccess.Entites;
using Yamal.Core.Models;

namespace Yamal.DataAccess.Configurations
{
    public class SpheresConfiguration : IEntityTypeConfiguration<SpheresEntity>
    {
        public void Configure(EntityTypeBuilder<SpheresEntity> builder)
        {
            

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .HasMaxLength(Sphere.NAME_MAX_LENGTH)
                .IsRequired();

            builder.Property(x => x.Code)
                .HasMaxLength(Sphere.CODE_MAX_LENGTH)
                .IsRequired();
        }
    }
}
