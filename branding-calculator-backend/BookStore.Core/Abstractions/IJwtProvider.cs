using Yamal.Core.Models;

namespace YamalBrand.Infrastructure
{
    public interface IJwtProvider
    {
        string GenerateToken(User user);
    }
}