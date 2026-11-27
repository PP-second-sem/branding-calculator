using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using DotNetEnv;
using System.IO;

namespace Yamal.DataAccess;

public class YamalDbContextFactory : IDesignTimeDbContextFactory<YamalDbContext>
{
    public YamalDbContext CreateDbContext(string[] args)
    {
       
        Env.Load();

        var optionsBuilder = new DbContextOptionsBuilder<YamalDbContext>();

        // Создаем временную конфигурацию, которая умеет читать переменные окружения
        var configuration = new ConfigurationBuilder()
            .AddEnvironmentVariables()
            .Build();

        var connectionString = configuration["ConnectionStrings:DefaultConnection"];

        if (string.IsNullOrEmpty(connectionString))
        {
            throw new InvalidOperationException("Строка подключения не найдена. Проверьте файл .env или переменные окружения.");
        }

        optionsBuilder.UseNpgsql(connectionString);

        return new YamalDbContext(optionsBuilder.Options);
    }
}