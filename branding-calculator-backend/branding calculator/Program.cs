using Microsoft.EntityFrameworkCore;
using Yamal.DataAccess;
using SQLitePCL;

namespace branding_calculator
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            Batteries.Init();

            builder.Services.AddDbContext<YamalDbContext>(options =>
            {
                var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
                options.UseSqlite(connectionString);
            });
                
            var app = builder.Build();

            app.MapGet("/", () => "Home page");

            app.Run();
        }
    }
}
