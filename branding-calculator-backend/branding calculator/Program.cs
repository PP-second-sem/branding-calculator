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

            // ограничение на формы 50 мб

            builder.Services.Configure<FormOptions>(options =>
            {
                options.ValueLengthLimit = int.MaxValue;
                options.MultipartBodyLengthLimit = 50 * 1024 * 1024; // 50 MB
                options.MemoryBufferThreshold = int.MaxValue;
            });
            
            // ограничение не сервер 50мб

            builder.WebHost.ConfigureKestrel(serverOptions =>
            {
                serverOptions.Limits.MaxRequestBodySize = 50 * 1024 * 1024; // 50 MB
            });

            builder.Services.AddDbContext<YamalDbContext>(options =>
            {
                var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

                // 🔥 Если путь относительный — делаем его абсолютным
                if (!Path.IsPathRooted(connectionString) && !connectionString.StartsWith("Data Source="))
                {
                    // Парсим путь из строки подключения
                    var dbPath = connectionString.Replace("Data Source=", "").Trim();
                    var absoluteDbPath = Path.Combine(AppContext.BaseDirectory, dbPath);
                    var finalConnectionString = $"Data Source={absoluteDbPath};Foreign Keys=True;";
                    options.UseSqlite(finalConnectionString);
                }
                else
                {
                    // Если путь уже абсолютный — просто добавляем Foreign Keys
                    if (!connectionString.Contains("Foreign Keys"))
                        connectionString += ";Foreign Keys=True;";
                    options.UseSqlite(connectionString);
                }
            });

            // регистрация сервисов и репозиториев

            builder.Services.AddScoped<IServices<Material>, MaterialsServices>();
            builder.Services.AddScoped<IRepository<Material>, MaterialRepository>();

            builder.Services.AddScoped<IJwtProvider, JwtProvider>();
            builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();

            builder.Services.AddScoped<IUsersServices, UsersServices>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();

            builder.Services.AddScoped<IQuestionServices, QuestionServices>();
            builder.Services.AddScoped<IQuestionRepository, QuestionRepository>();

            builder.Services.AddScoped<IServices<LogoLibrary>, LogoLibraryService>();
            builder.Services.AddScoped<IRepository<LogoLibrary>, LogoLibraryRepository>();

            builder.Services.AddScoped<IRepository<MediaCategory>, MediaCategoryRepository>();
            builder.Services.AddScoped<IServices<MediaCategory>, MediaCategoryService>();

            builder.Services.AddScoped<IRepository<MediaType>, MediaTypeRepository>();
            builder.Services.AddScoped<IServices<MediaType>, MediaTypeService>();

            builder.Services.AddScoped<IGeneratedLayoutRepository, GeneratedLayoutRepository>();
            builder.Services.AddScoped<IGeneratedLayoutService, GeneratedLayoutService>();

            var app = builder.Build();

            app.UseStaticFiles();

            app.UseSwagger();

            app.UseSwaggerUI();

            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage(); 
            }

            app.MapGet("/", () => Results.Redirect("swagger"));

            //app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();


            app.Run();
        }
    }
}
//branding-calculator-git\branding-calculator-backend\Data