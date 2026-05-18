

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Configurations
{
    public class LogoLibraryConfiguration : IEntityTypeConfiguration<LogoLibraryEntity>
    {
        public void Configure(EntityTypeBuilder<LogoLibraryEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(x => x.FilePath)
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(x => x.FileType)
                .HasMaxLength(20)
                .IsRequired();

            builder.Property(x => x.IsActive)
                .IsRequired();

            builder.Property(x => x.SortOrder)
                .IsRequired();
        }
    }
}
