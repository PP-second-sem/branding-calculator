using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Configurations
{
    public class GeneratedLayoutsConfiguration : IEntityTypeConfiguration<GeneratedLayoutsEntity>
    {
        public void Configure(EntityTypeBuilder<GeneratedLayoutsEntity> builder)
        {
            // Имя таблицы согласно документации

            // Первичный ключ
            builder.HasKey(l => l.Id);

            // Настройка свойств
            builder.Property(l => l.UserId)
                    .IsRequired();

            builder.Property(l => l.CarrierTypeId)
                    .IsRequired();

            builder.Property(l => l.ParametersJson)
                    .IsRequired();  

            builder.Property(l => l.PackageUrl)
                    .HasMaxLength(255);  

            builder.Property(l => l.OutputFormats)
                    .IsRequired()
                    .HasMaxLength(50);   

            builder.Property(l => l.CreatedAt)
                    .IsRequired();  

            // Настройка внешних ключей и связей

            builder.HasOne(l => l.User)
                    .WithMany(u => u.GeneratedLayouts)  
                    .HasForeignKey(l => l.UserId)
                    .OnDelete(DeleteBehavior.Cascade);   

            // Связь с типом носителя (Many-to-One)
            builder.HasOne(l => l.Media)
                    .WithMany(mt => mt.GeneratedLayouts)  // У MediaTypeEntity есть коллекция GeneratedLayouts
                    .HasForeignKey(l => l.CarrierTypeId)
                    .OnDelete(DeleteBehavior.Restrict);   // Не удаляем тип, если есть макеты
        }
    }
}
