using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<UserEntity>
    {
        public void Configure(EntityTypeBuilder<UserEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.PasswordHash)
                .HasMaxLength(255)
                .IsRequired();
            

            builder.Property(x => x.Role)
                .HasMaxLength(20)
                .IsRequired();
        }
    }
}
