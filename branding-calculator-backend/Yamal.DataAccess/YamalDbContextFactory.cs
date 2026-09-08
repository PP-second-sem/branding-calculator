using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Yamal.DataAccess;

public class YamalDbContextFactory : IDesignTimeDbContextFactory<YamalDbContext>
{
    public YamalDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<YamalDbContext>();

        optionsBuilder.UseSqlite("Data Source=D:\\Project\\branding-calculator-backend\\branding calculator\\Data\\yamal.db;Foreign Keys=True;;Mode=ReadWrite");
        
        return new YamalDbContext(optionsBuilder.Options);
    }
}