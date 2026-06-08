# --- Этап сборки ---
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Копируем всё и восстанавливаем зависимости
COPY . .
RUN dotnet restore "branding calculator/Branding-Designer.csproj"

# Собираем и публикуем
RUN dotnet build "branding calculator/Branding-Designer.csproj" -c Release -o /app/build
RUN dotnet publish "branding calculator/Branding-Designer.csproj" -c Release -o /app/publish

# --- Этап запуска ---
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# Создаем папки для БД и загрузок. 
# ВАЖНО: Образы .NET 8+ работают от пользователя app, поэтому нужно выдать ему права, 
# иначе SQLite не сможет создать/прочитать файл базы данных.
RUN mkdir -p /app/Data /app/uploads && chown -R app:app /app/Data /app/uploads

EXPOSE 8080
ENTRYPOINT ["dotnet", "Branding-Designer.dll"]