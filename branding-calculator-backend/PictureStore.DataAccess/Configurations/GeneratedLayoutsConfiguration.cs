using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Configurations
{
    public class GeneratedLayoutsConfiguration : IEntityTypeConfiguration<GeneratedLayoutsEntity>
    {
        public void Configure(EntityTypeBuilder<GeneratedLayoutsEntity> builder)
        {

            builder.HasKey(l => l.Id);

            builder.Property(l => l.UserId)
                .IsRequired();

            builder.Property(l => l.CarrierTypeId)
                .IsRequired();

            builder.Property(l => l.ParametersJson)

                .IsRequired();

            builder.Property(l => l.PackageUrl);

            builder.Property(l => l.OutputFormats)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(l => l.CreatedAt)
                .IsRequired();

            builder.HasOne(l => l.User)
                .WithMany(u => u.GeneratedLayouts)
                .HasForeignKey(l => l.UserId)
                .OnDelete(DeleteBehavior.Cascade);


            builder.HasOne(l => l.Media)
                .WithMany(mt => mt.GeneratedLayouts)
                .HasForeignKey(l => l.CarrierTypeId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}