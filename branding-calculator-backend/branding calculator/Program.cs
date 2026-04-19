using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;
using Yamal.Application;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;
using Yamal.DataAccess;
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

            builder.Services.Configure<FormOptions>(options =>
            {
                options.ValueLengthLimit = int.MaxValue;
                options.MultipartBodyLengthLimit = 50 * 1024 * 1024; // 50 MB
                options.MemoryBufferThreshold = int.MaxValue;
            });

            // Или через WebApplicationBuilder
            builder.WebHost.ConfigureKestrel(serverOptions =>
            {
                serverOptions.Limits.MaxRequestBodySize = 50 * 1024 * 1024; // 50 MB
            });

            builder.Services.AddDbContext<YamalDbContext>(options =>
            {
                var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
                var absolutePath = Path.Combine(AppContext.BaseDirectory, connectionString);
                var dbFolder = Path.GetDirectoryName(absolutePath);

                options.UseSqlite(connectionString);
            });




            builder.Services.AddScoped<IServices<Material>, MaterialsServices>();
            builder.Services.AddScoped<IRepository<Material>, MaterialRepository>();


            var app = builder.Build();

            //// === АВТОМАТИЧЕСКОЕ СОЗДАНИЕ БД И ТАБЛИЦ ===
            //using (var scope = app.Services.CreateScope())
            //{
            //    var dbContext = scope.ServiceProvider.GetRequiredService<YamalDbContext>();
            //    dbContext.Database.EnsureCreatedAsync();
            //}
            //// === КОНЕЦ БЛОКА ===
            ///



            app.UseStaticFiles();

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