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
                options.UseSqlite(connectionString);
            });

            builder.Services.AddScoped<IServices<Material>, MaterialsServices>();
            builder.Services.AddScoped<IRepository<Material>, MaterialRepository>();


            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();

                app.MapGet("/", () => Results.Redirect("swagger/index.html"));
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
