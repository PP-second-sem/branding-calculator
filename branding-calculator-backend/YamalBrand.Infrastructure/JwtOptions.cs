using Microsoft.Extensions.Hosting;

namespace YamalBrand.Infrastructure
{
    public class JwtOptions
    {
        public string SecretKey { get; set; } = string.Empty;

        public int ExpitesHours { get; set; }
    }
}