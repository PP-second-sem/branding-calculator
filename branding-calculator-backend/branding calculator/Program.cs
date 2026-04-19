using Microsoft.EntityFrameworkCore;
using Yamal.DataAccess;
using SQLitePCL;
using Yamal.Application;
using Yamal.Core.Models;
using Yamal.Core.Abstractions;
using Yamal.DataAccess.Repositories;

namespace branding_calculator
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            Batteries.Init();

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<YamalDbContext>(options =>
            {
                var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
                var absolutePath = Path.Combine(AppContext.BaseDirectory, connectionString);
                var dbFolder = Path.GetDirectoryName(absolutePath);

                options.UseSqlite(connectionString);
            });

            // Регистрируем сервис для работы с файлами
            var uploadFolder = builder.Configuration.GetValue<string>("UploadFolder") ?? "uploads";
            var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), uploadFolder);
            builder.Services.AddSingleton<IFileService>(new FileService(uploadPath));

            builder.Services.AddScoped<IServices<Material>, MaterialsServices>();
            builder.Services.AddScoped<IRepository<Material>, MaterialRepository>();


            var app = builder.Build();

            // === АВТОМАТИЧЕСКОЕ СОЗДАНИЕ БД И ТАБЛИЦ ===
            using (var scope = app.Services.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<YamalDbContext>();
                dbContext.Database.EnsureCreatedAsync();
            }
            // === КОНЕЦ БЛОКА ===

            app.UseSwagger();

            app.UseSwaggerUI();

            app.MapGet("/", () => Results.Redirect("swagger"));

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
//branding-calculator-git\branding-calculator-backend\Data