# --- Этап сборки ---
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Копируем конфиг NuGet (если он есть)
COPY nuget.config ./

# Копируем все .csproj файлы
COPY Yamal.Core/Yamal.Core.csproj Yamal.Core/
COPY Yamal.DataAccess/Yamal.DataAccess.csproj Yamal.DataAccess/
COPY Yamal.Application/Yamal.Application.csproj Yamal.Application/
COPY Yamal.Infrastructure/YamalBrand.Infrastructure.csproj Yamal.Infrastructure/
COPY branding-calculator/Branding-Designer.csproj branding-calculator/

# Делаем restore с детальным выводом (чтобы видеть, на каком пакете зависает)
RUN dotnet restore "branding-calculator/Branding-Designer.csproj" --verbosity detailed

# Копируем весь остальной код
COPY . .

# Собираем и публикуем
RUN dotnet build "branding-calculator/Branding-Designer.csproj" -c Release -o /app/build
RUN dotnet publish "branding-calculator/Branding-Designer.csproj" -c Release -o /app/publish

# --- Этап запуска ---
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

RUN mkdir -p /app/Data /app/uploads && chown -R app:app /app/Data /app/uploads

EXPOSE 8080
USER app
ENTRYPOINT ["dotnet", "Branding-Designer.dll"]
