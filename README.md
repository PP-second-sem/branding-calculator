# Конструктор брендирования для бренда "Ямал"
Репозиторий содержит код для сайта бренда Ямал, на котором находится каталог брендирования, а так же генерации айдентики бренда

## Установка на VPS

1. Клонирование репозитория
git clone https://github.com/PP-second-sem/branding-calculator.git
cd branding-calculator
2. Подготовка VPS
На вашей машине необходимо установить nginx
* sudo apt update
* sudo apt install nginx
Далее настроим конфиг
* sudo nano /etc/nginx/sites-available/yamalBrand

```
server {
    server_name "Ваше название сервера";

    client_max_body_size 55M;

    # API и Swagger 
    location /api/ {
        proxy_pass         http://127.0.0.1:5001;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }

    location /swagger {
        proxy_pass         http://127.0.0.1:5001;
        proxy_http_version 1.1;
        proxy_set_header   Host $host;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }

    # Angular
    location / {
        proxy_pass         http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
    }

}
```
* sudo systemctl restart nginx

3. Сборка Docker контейнера 
* Установим Docker 
```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo chmod +x get-docker.sh
sudo sh ./get-docker.sh
```
* Зададим права
sudo usermod -aG docker $USER
* Выполним сборку образа
docker compose up -d --build


## Структура проекта 
Проект разделен на 2 большии категории Backend и Frontend
### Backend 
Категория Backend написана на C# ASP.NET. Код написан с помощью такого подхода проектирования как, чистая архитектура. 
Основные слои:
Yamal.Core - содержит Domain модели 
Yamal.DataAccess - содержит сущности(Entities), контекст базы данные, репозитории, в которых написаны CRUD операции(Repositories), а так же конфигурацию полей в БД(Configurations)
Yamal.Infrastructure - Содержит в себе настройки JWT token 
Yamal.Application - содержит сервисы для взаимодействия с API

branding calculator - основной слой, в котором находится взаимодействия системы с апи.
### Frontend
Фронтенд построен на Angular 19 как одностраничное приложение (SPA) с компонентной архитектурой, где каждый экран (каталог, редактор, админка) реализован в виде отдельных лениво загружаемых компонентов через loadComponent. Маршрутизация настроена декларативно с использованием гвардов (authGuard) для защиты приватных разделов и контроля доступа на основе JWT-токена. Взаимодействие с бэкендом вынесено в отдельные HTTP-сервисы, которые инкапсулируют REST-запросы, управляют авторизацией и передают данные компонентам через асинхронные потоки RxJS. Приложение собирается в автономные статические бандлы, раздается через Nginx-контейнер и работает независимо от сервера, обмениваясь с ним только асинхронными API-вызовами.

### Data
Все файлы сохраняются на сервер в папке uploads/ 
А база данных должна находится в корне репозитория


