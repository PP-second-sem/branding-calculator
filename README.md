# branding-calculator
## Калькулятор брендирования











### Deploy
Для деплоя нам понадобиться опубликовать файлы приложения. 
после чего на сервер(VPS/VDS) в созданную папку проекта необходимо загрузить все файлы

настройки nginx:
```
server {
    server_name yamal.snaaas.ru;

    client_max_body_size 55M;

    location / {
        proxy_pass         http://127.0.0.1:5001;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

Так же существует сервис для запуска проекта. в нашем случае папка проекта называется "yamalBrand", а сервис лежит по пути /etc/systemd/system/yamal.service :
```
[Unit]
Description=Yamal Brand constructor ex. calculator

[Service]
WorkingDirectory=/var/www/yamalBrand/
ExecStart=/usr/bin/dotnet /var/www/yamalBrand/branding-calculator.dll
Restart=always
RestartSec=10
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production

[Install]
WantedBy=multi-user.target
```

Так же в папке проекта помимо файлов .Net должны находится 2 директории со следующим содержимым:
yamalBrand
    ├── Data
    │   └── UserLayouts
    └── Uploads
        ├── Logos
        └── Materials
Для каждой папке и файлов  должен быть назначен владелец www-data с правами 755(rwxr-xr-x)

