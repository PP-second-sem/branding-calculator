using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Configurations
{
    public class MediaTypeConfiguration : IEntityTypeConfiguration<MediaTypesEntity>
    {
        public void Configure(EntityTypeBuilder<MediaTypesEntity> builder)
        {
            builder.HasKey(m => m.Id);

            builder.Property(t => t.CategoryId)
                  .IsRequired();

            builder.Property(t => t.Name)
                   .IsRequired()
                   .HasMaxLength(100);

            builder.Property(t => t.ParametersSchema)
                   .IsRequired();

            builder.Property(t => t.SortOrder)
                   .IsRequired();

            builder.Property(t => t.IsActive)
                   .IsRequired();

            builder.HasOne(t => t.Category)
                   .WithMany(c => c.Types)
                   .HasForeignKey(t => t.CategoryId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
