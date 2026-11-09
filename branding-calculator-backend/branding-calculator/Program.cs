using branding_calculator.Extensions;
using Serilog;
using SQLitePCL;

Batteries.Init();
System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateBootstrapLogger();

try
{
    var builder = WebApplication.CreateBuilder(args);

    builder.Host.UseSerilog((context, services, configuration) =>
        configuration
            .ReadFrom.Configuration(context.Configuration)
            .Enrich.FromLogContext()
            .WriteTo.Console()
            .WriteTo.File("logs/app-.txt", rollingInterval: RollingInterval.Day)
    );

    builder.ConfigureAppLimits();
    builder.Services.ConfigureDatabase(builder.Configuration);
    builder.Services.AddApplicationServices(builder.Configuration);

    var app = builder.Build();

    app.UseSerilogRequestLogging();
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
    Log.CloseAndFlush();
}