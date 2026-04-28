using branding_calculator.Extintions;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;
using Yamal.Application;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;
using Yamal.DataAccess;
using Yamal.DataAccess.Repositories;
using YamalBrand.Infrastructure;

namespace branding_calculator
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            Batteries.Init();
            builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection(nameof(JwtOptions)));

            var jwtOptions = builder.Configuration.GetSection(nameof(JwtOptions)).Get<JwtOptions>();

            builder.Services.AddApiAuthentication(jwtOptions);
            builder.Services.AddAuthorization();
            builder.Services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.Converters.Add(new System.Text.Json.Serialization.JsonStringEnumConverter());
            });
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(c => c.UseInlineDefinitionsForEnums());

            builder.Services.Configure<FormOptions>(options =>
            {
                options.ValueLengthLimit = int.MaxValue;
                options.MultipartBodyLengthLimit = 50 * 1024 * 1024; // 50 MB
                options.MemoryBufferThreshold = int.MaxValue;
            });

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
            builder.Services.AddScoped<IJwtProvider, JwtProvider>();
            builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();
            builder.Services.AddScoped<IUsersServices, UsersServices>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();



            var app = builder.Build();

            app.UseStaticFiles();

            app.UseSwagger();

            app.UseSwaggerUI();



            app.MapGet("/", () => Results.Redirect("swagger"));

            app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();


            app.Run();
        }
    }
}
//branding-calculator-git\branding-calculator-backend\Data