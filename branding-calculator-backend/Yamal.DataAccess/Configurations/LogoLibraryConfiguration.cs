

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Configurations
{
    public class LogoLibraryConfiguration : IEntityTypeConfiguration<LogoLibraryEntity>
    {
        public void Configure(EntityTypeBuilder<LogoLibraryEntity> builder)
        {
            builder.HasKey(l => l.Id);

            builder.Property(l => l.Name)
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(l => l.FilePath)
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(l => l.FileType)
                .HasMaxLength(20)
                .IsRequired();

            builder.Property(l => l.IsActive)
                .IsRequired();

            builder.Property(l => l.SortOrder)
                .IsRequired();
            
            builder.HasMany(l => l.CarrierTypeLogos)
                .WithOne(c => c.LogoLibrary)
                .HasForeignKey(c => c.LogoId)
                .OnDelete(DeleteBehavior.Cascade);
                
        }
    }
}
