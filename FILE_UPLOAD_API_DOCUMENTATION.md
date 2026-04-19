# Работа с файлами в API

## Обзор

Добавлена возможность отправлять, изменять, удалять и скачивать файлы через API. Файлы сохраняются локально на сервере в папке `uploads` (путь настраивается в `appsettings.json`).

## Настройка

### appsettings.json

```json
{
  "UploadFolder": "uploads"
}
```

Параметр `UploadFolder` указывает папку для сохранения загруженных файлов относительно корня проекта.

### Program.cs

Сервис для работы с файлами регистрируется как Singleton:

```csharp
var uploadFolder = builder.Configuration.GetValue<string>("UploadFolder") ?? "uploads";
var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), uploadFolder);
builder.Services.AddSingleton<IFileService>(new FileService(uploadPath));
```

## Контроллеры

### MaterialController

Контроллер для управления материалами с поддержкой загрузки файлов.

**Маршрут**: `/Material`

#### Endpoints:

1. **POST** `/Material` - Создание материала с файлом
2. **PUT** `/Material/{id}` - Обновление материала с заменой файла
3. **DELETE** `/Material/{id}` - Удаление материала и файла
4. **GET** `/Material` - Получение списка материалов
5. **GET** `/Material/{id}/file` - Скачивание файла материала

### FileController

Отдельный контроллер для управления файлами.

**Маршрут**: `/api/File`

#### Endpoints:

1. **POST** `/api/File/upload` - Загрузка одного файла
2. **POST** `/api/File/upload-multiple` - Массовая загрузка файлов
3. **GET** `/api/File/download?filePath={path}` - Скачивание файла по пути
4. **DELETE** `/api/File/delete?filePath={path}` - Удаление файла по пути
5. **GET** `/api/File/info?filePath={path}` - Получение информации о файле

## API Endpoints

### MaterialController

#### 1. Создание материала с файлом

**POST** `/Material`

**Content-Type**: `multipart/form-data`

**Параметры:**
- `file` (IFormFile) - загружаемый файл (опционально)
- `Category` (string) - категория
- `Sphere` (string) - сфера
- `Name` (string) - название
- `Description` (string) - описание
- `City` (string) - город
- `Color` (string) - цвет
- `PreviewUrl` (string) - URL превью (опционально)

**Пример запроса (curl):**
```bash
curl -X POST http://localhost:5001/Material \
  -F "file=@/path/to/file.pdf" \
  -F "Category=TestCategory" \
  -F "Sphere=TestSphere" \
  -F "Name=TestName" \
  -F "Description=TestDescription" \
  -F "City=TestCity" \
  -F "Color=TestColor"
```

**Ответ:**
```json
200 OK
1
```
(возвращает ID созданного материала)

#### 2. Обновление материала с файлом

**PUT** `/Material/{id}`

**Content-Type**: `multipart/form-data`

**Параметры:**
- `file` (IFormFile) - новый файл (опционально, если не передан - старый файл сохраняется)
- `Category` (string) - категория
- `Sphere` (string) - сфера
- `Name` (string) - название
- `Description` (string) - описание
- `City` (string) - город
- `Color` (string) - цвет
- `PreviewUrl` (string) - URL превью (опционально)

**Пример запроса (curl):**
```bash
curl -X PUT http://localhost:5001/Material/1 \
  -F "file=@/path/to/newfile.pdf" \
  -F "Category=UpdatedCategory" \
  -F "Sphere=UpdatedSphere" \
  -F "Name=UpdatedName" \
  -F "Description=UpdatedDescription" \
  -F "City=UpdatedCity" \
  -F "Color=UpdatedColor"
```

**Примечание:** Если загружается новый файл, старый файл автоматически удаляется из файловой системы.

**Ответ:**
```json
200 OK
1
```

#### 3. Удаление материала

**DELETE** `/Material/{id}`

**Пример запроса (curl):**
```bash
curl -X DELETE http://localhost:5001/Material/1
```

**Примечание:** При удалении материала связанный с ним файл также удаляется из файловой системы.

**Ответ:**
```json
200 OK
1
```

#### 4. Получение списка материалов

**GET** `/Material`

**Пример запроса (curl):**
```bash
curl http://localhost:5001/Material
```

**Ответ:**
```json
[
  {
    "id": 1,
    "category": "TestCategory",
    "sphere": "TestSphere",
    "name": "TestName",
    "description": "TestDescription",
    "city": "TestCity",
    "color": "TestColor",
    "previewUrl": "",
    "filePath": "uploads/guid_filename.pdf",
    "fileType": "application/pdf",
    "fileSize": 102400
  }
]
```

#### 5. Скачивание файла материала

**GET** `/Material/{id}/file`

**Пример запроса (curl):**
```bash
curl -O http://localhost:5001/Material/1/file
```

**Ответ:**
- `200 OK` - файл возвращается как бинарный поток
- `404 Not Found` - материал или файл не найден

---

### FileController

#### 6. Загрузка одного файла

**POST** `/api/File/upload`

**Content-Type**: `multipart/form-data`

**Параметры:**
- `file` (IFormFile) - загружаемый файл

**Пример запроса (curl):**
```bash
curl -X POST http://localhost:5001/api/File/upload \
  -F "file=@/path/to/document.pdf"
```

**Ответ:**
```json
{
  "filePath": "uploads/guid_document.pdf",
  "fileName": "document.pdf",
  "fileSize": 102400,
  "contentType": "application/pdf"
}
```

**Ограничения:**
- Максимальный размер файла: 50 МБ

#### 7. Массовая загрузка файлов

**POST** `/api/File/upload-multiple`

**Content-Type**: `multipart/form-data`

**Параметры:**
- `files` (List<IFormFile>) - список файлов

**Пример запроса (curl):**
```bash
curl -X POST http://localhost:5001/api/File/upload-multiple \
  -F "files=@/path/to/file1.pdf" \
  -F "files=@/path/to/file2.jpg" \
  -F "files=@/path/to/file3.png"
```

**Ответ:**
```json
[
  {
    "filePath": "uploads/guid_file1.pdf",
    "fileName": "file1.pdf",
    "fileSize": 102400,
    "contentType": "application/pdf",
    "success": true
  },
  {
    "filePath": "uploads/guid_file2.jpg",
    "fileName": "file2.jpg",
    "fileSize": 204800,
    "contentType": "image/jpeg",
    "success": true
  },
  {
    "fileName": "file3.png",
    "error": "File size exceeds the maximum limit of 50 MB",
    "success": false
  }
]
```

#### 8. Скачивание файла по пути

**GET** `/api/File/download?filePath={path}`

**Параметры:**
- `filePath` (string) - путь к файлу (как хранится в БД)

**Пример запроса (curl):**
```bash
curl -O "http://localhost:5001/api/File/download?filePath=uploads/guid_document.pdf"
```

**Ответ:**
- `200 OK` - файл возвращается как бинарный поток с правильным Content-Type
- `400 Bad Request` - не указан путь к файлу
- `404 Not Found` - файл не найден

#### 9. Удаление файла по пути

**DELETE** `/api/File/delete?filePath={path}`

**Параметры:**
- `filePath` (string) - путь к файлу

**Пример запроса (curl):**
```bash
curl -X DELETE "http://localhost:5001/api/File/delete?filePath=uploads/guid_document.pdf"
```

**Ответ:**
```json
{
  "success": true,
  "message": "File deleted successfully"
}
```

Или если файл не найден:
```json
{
  "success": false,
  "message": "File not found"
}
```

#### 10. Получение информации о файле

**GET** `/api/File/info?filePath={path}`

**Параметры:**
- `filePath` (string) - путь к файлу

**Пример запроса (curl):**
```bash
curl "http://localhost:5001/api/File/info?filePath=uploads/guid_document.pdf"
```

**Ответ:**
```json
{
  "fileName": "guid_document.pdf",
  "fileSize": 102400,
  "extension": ".pdf",
  "createdDate": "2025-01-15T10:30:00",
  "modifiedDate": "2025-01-15T10:30:00",
  "filePath": "uploads/guid_document.pdf"
}
```

---

## Структура хранения файлов

Файлы сохраняются в папке, указанной в настройках (`uploads` по умолчанию):

```
/workspace/branding-calculator-backend/branding calculator/uploads/
├── {guid}_{original_filename}
├── {guid}_{original_filename}
└── ...
```

Имя файла формируется как `{GUID}_{оригинальное_имя}` для обеспечения уникальности.

## Важные замечания

1. **Размер файлов**: По умолчанию ASP.NET Core ограничивает размер загружаемых файлов (обычно до 28.6 МБ). Для загрузки больших файлов добавьте настройку:

   ```csharp
   builder.Services.Configure<FormOptions>(options =>
   {
       options.MultipartBodyLengthLimit = 104857600; // 100 MB
   });
   ```

2. **VDS развертывание**: При развертывании на VDS убедитесь, что у приложения есть права на запись в папку для загрузок.

3. **Безопасность**: В продакшене рекомендуется добавить:
   - Проверку типов файлов (MIME type validation)
   - Сканирование на вирусы
   - Ограничение размера файлов
   - Хранение файлов вне веб-доступной директории

4. **Резервное копирование**: Не забывайте включать папку `uploads` в резервные копии при развертывании на VDS.

5. **Автоматическое удаление**: 
   - При обновлении материала с новым файлом старый файл удаляется автоматически
   - При удалении материала связанный файл также удаляется

## Пример использования во фронтенде (Angular)

### Работа с MaterialController

```typescript
// Загрузка файла вместе с материалом
const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('Category', 'TestCategory');
formData.append('Sphere', 'TestSphere');
formData.append('Name', 'TestName');
formData.append('Description', 'TestDescription');
formData.append('City', 'TestCity');
formData.append('Color', 'TestColor');

this.http.post<number>('http://localhost:5001/Material', formData)
  .subscribe(id => console.log('Created material with ID:', id));

// Скачивание файла материала
this.http.get('http://localhost:5001/Material/1/file', { responseType: 'blob' })
  .subscribe(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'file.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  });
```

### Работа с FileController

```typescript
// Загрузка файла через FileController
const formData = new FormData();
formData.append('file', fileInput.files[0]);

this.http.post<{filePath: string, fileName: string, fileSize: number}>('http://localhost:5001/api/File/upload', formData)
  .subscribe(response => {
    console.log('File uploaded:', response.filePath);
    // Сохраните filePath для последующего использования
  });

// Массовая загрузка
const multiFormData = new FormData();
for (let i = 0; i < files.length; i++) {
  multiFormData.append('files', files[i]);
}

this.http.post<any[]>('http://localhost:5001/api/File/upload-multiple', multiFormData)
  .subscribe(results => {
    results.forEach(result => {
      if (result.success) {
        console.log('Uploaded:', result.filePath);
      } else {
        console.error('Failed:', result.fileName, result.error);
      }
    });
  });

// Скачивание файла по пути
this.http.get('http://localhost:5001/api/File/download?filePath=uploads/guid_file.pdf', { responseType: 'blob' })
  .subscribe(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'downloaded-file.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  });

// Удаление файла
this.http.delete('http://localhost:5001/api/File/delete?filePath=uploads/guid_file.pdf')
  .subscribe(response => {
    console.log('File deleted:', response);
  });

// Получение информации о файле
this.http.get<any>('http://localhost:5001/api/File/info?filePath=uploads/guid_file.pdf')
  .subscribe(info => {
    console.log('File info:', info);
    console.log('Size:', info.fileSize, 'bytes');
    console.log('Created:', info.createdDate);
  });
```

## Поддерживаемые типы файлов

FileController автоматически определяет Content-Type для следующих расширений:

- **Документы**: .txt, .pdf, .doc, .docx, .xls, .xlsx, .csv, .json, .xml
- **Изображения**: .png, .jpg, .jpeg, .gif, .svg
- **Архивы**: .zip, .rar
- **Медиа**: .mp3, .mp4

Для остальных типов используется `application/octet-stream`.
