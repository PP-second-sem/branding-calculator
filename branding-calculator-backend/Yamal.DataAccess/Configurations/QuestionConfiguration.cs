using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Configurations
{
    public class QuestionConfiguration : IEntityTypeConfiguration<QuestionsEntity>
    {
        public void Configure(EntityTypeBuilder<QuestionsEntity> builder)
        {

            builder.HasKey(q => q.Id);
            
            // Свойства
            builder.Property(q => q.Title)
                   .IsRequired()
                   .HasMaxLength(200);

            builder.Property(q => q.UserQuestion)
                   .IsRequired();

            builder.Property(q => q.CreatedAt)
                   .IsRequired();
            
        }
    }
}