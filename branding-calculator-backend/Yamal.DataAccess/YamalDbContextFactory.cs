using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System.IO;

namespace Yamal.DataAccess;

public class YamalDbContextFactory : IDesignTimeDbContextFactory<YamalDbContext>
{
    public YamalDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<YamalDbContext>();

        var dbPath = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), @"..\branding calculator\Data\yamal.db"));


        // 3. Передаем путь в строку подключения SQLite
        optionsBuilder.UseSqlite($"Data Source={dbPath};Foreign Keys=True;Mode=ReadWrite");

        return new YamalDbContext(optionsBuilder.Options);
    }
}