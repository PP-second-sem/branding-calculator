using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Configurations;

public class CarrierTypeLogoConfiguration : IEntityTypeConfiguration<CarrierTypeLogosEntity>
{
    public void Configure(EntityTypeBuilder<CarrierTypeLogosEntity> builder)
    {
        builder.ToTable("CarrierTypeLogos");

        builder.HasKey(c => c.Id);

        builder.Property(c => c.CarrierTypeId)
            .IsRequired();
        
        builder.Property(c => c.LogoId)
            .IsRequired();
        
        builder.Property(x => x.IsRecommended)
            .IsRequired();
        
        builder.HasOne(t => t.MediaType)
            .WithMany(c => c.CarrierTypes)
            .HasForeignKey(t => t.CarrierTypeId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(c => c.LogoLibrary)
            .WithMany(l => l.CarrierTypeLogos)
            .HasForeignKey(c => c.LogoId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}