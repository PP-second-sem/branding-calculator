using branding_calculator.Extintions;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using Yamal.Application;
using Yamal.Core.Abstractions;




using Yamal.Core.Models;
using Yamal.DataAccess;
using Yamal.DataAccess.Repositories;


using YamalBrand.Infrastructure;

namespace branding_calculator.Extensions
{
    public static class ServiceCollectionextensions
    {
        public static void AddApplicationServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<JwtOptions>(configuration.GetSection(nameof(JwtOptions)));
            var jwtOptions = configuration.GetSection(nameof(JwtOptions)).Get<JwtOptions>();

            services.AddApiAuthentication(jwtOptions);
            services.AddAuthorization();

            // 2. Настройки контроллеров и Swagger
            services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.Converters.Add(new System.Text.Json.Serialization.JsonStringEnumConverter());
            });
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen(c => c.UseInlineDefinitionsForEnums());

            // 3. Регистрация сервисов и репозиториев (Группировка по доменам)
            services.AddScoped<IServices<Material>, MaterialsServices>();
            services.AddScoped<IRepository<Material>, MaterialRepository>();

            services.AddScoped<IUsersServices, UsersServices>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IJwtProvider, JwtProvider>();
            services.AddScoped<IPasswordHasher, PasswordHasher>();

            services.AddScoped<IQuestionServices, QuestionServices>();
            services.AddScoped<IQuestionRepository, QuestionRepository>();

            services.AddScoped<IServices<LogoLibrary>, LogoLibraryService>();
            services.AddScoped<IRepository<LogoLibrary>, LogoLibraryRepository>();

            services.AddScoped<IRepository<MediaCategory>, MediaCategoryRepository>();
            services.AddScoped<IServices<MediaCategory>, MediaCategoryService>();

            services.AddScoped<IRepository<MediaType>, MediaTypeRepository>();
            services.AddScoped<IServices<MediaType>, MediaTypeService>();

            services.AddScoped<ICarriersTypeLogoRepository, CarrierTypeLogoRepository>();
            services.AddScoped<ICarrierTypeLogoService, CarrierTypeLogoService>();

            services.AddScoped<IFileService, FileService>();
        }

        public static void ConfigureDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<YamalDbContext>(options =>
            {
                var connectionString = configuration.GetConnectionString("DefaultConnection");

                if (!string.IsNullOrEmpty(connectionString) &&
                    !connectionString.Contains("Data Source=", StringComparison.OrdinalIgnoreCase) &&
                    !connectionString.Contains("DataSource=", StringComparison.OrdinalIgnoreCase))
                {
                    connectionString = $"Data Source={connectionString}";
                }

                options.UseSqlite(connectionString);
            });
        }

        public static void ConfigureAppLimits(this WebApplicationBuilder builder)
        {
            builder.Services.Configure<FormOptions>(options =>
            {
                options.ValueLengthLimit = int.MaxValue;
                options.MultipartBodyLengthLimit = 500 * 1024 * 1024; // 500 MB
                options.MemoryBufferThreshold = int.MaxValue;
            });

            builder.WebHost.ConfigureKestrel(serverOptions =>
            {
                serverOptions.Limits.MaxRequestBodySize = 500 * 1024 * 1024; // 500 MB
                serverOptions.ListenAnyIP(8080);
            });
        }
    }
}
