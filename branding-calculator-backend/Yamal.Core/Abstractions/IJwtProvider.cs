using Yamal.Core.Models;


namespace Yamal.Core.Abstractions
{
    public interface IJwtProvider
    {
        string GenerateToken(User user);
    }
}