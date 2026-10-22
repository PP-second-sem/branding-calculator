using branding_calculator.Extensions;
using Serilog;
using SQLitePCL;

// 1. Глобальная инициализация (до создания билдера)
Batteries.Init();
System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);

// 2. Bootstrap-логгер для перехвата ошибок на самом раннем этапе запуска
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateBootstrapLogger();

try
{
    var builder = WebApplication.CreateBuilder(args);

    // 3. Настройка Serilog (читает из appsettings.json + добавляет файловый лог)
    builder.Host.UseSerilog((context, services, configuration) =>
        configuration
            .ReadFrom.Configuration(context.Configuration)
            .Enrich.FromLogContext()
            .WriteTo.Console()
            .WriteTo.File("logs/app-.txt", rollingInterval: RollingInterval.Day)
    );

    // 4. Вызов вынесенных методов расширения (Program.cs остается чистым!)
    builder.ConfigureAppLimits();
    builder.Services.ConfigureDatabase(builder.Configuration);
    builder.Services.AddApplicationServices(builder.Configuration);

    var app = builder.Build();

    // 5. Конвейер обработки запросов (Middleware)
    app.UseSerilogRequestLogging(); // 
    app.UseStaticFiles();

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.MapGet("/", () => Results.Redirect("swagger"));

    app.UseHttpsRedirection();
    app.UseAuthentication();
    app.UseAuthorization();
    app.MapControllers();

    Log.Information("Приложение успешно запущено и готово принимать запросы");
    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Критическая ошибка: приложение не смогло запуститься");
}
finally
{
    Log.CloseAndFlush(); // Гарантируем запись последних логов перед выходом
}