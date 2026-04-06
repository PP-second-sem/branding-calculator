using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PictureStore.DataAccess.Entites;
using Yamal.Core.Models;

namespace Yamal.DataAccess.Configurations
{
    internal class FilesConfiguration : IEntityTypeConfiguration<FilesEntity>

    {
        public void Configure(EntityTypeBuilder<FilesEntity> builder)
        {
            

            builder.HasKey(x =>  x.Id);

            builder.Property(x => x.FilePath)
                .HasMaxLength(Core.Models.File.PATH_MAX_LENGTH)
                .IsRequired();

            builder.Property(x => x.FileSize)
                .HasMaxLength(Core.Models.File.TYPE_MAX_LENGTH)
                .IsRequired();

            builder.Property(x => x.FileSize)
                .IsRequired();

            builder.Property(x => x.CreatedAt)
                .IsRequired();

           
        }
    }
}
