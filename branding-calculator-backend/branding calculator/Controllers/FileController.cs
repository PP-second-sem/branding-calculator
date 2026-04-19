using Microsoft.AspNetCore.Mvc;
using Yamal.Application;

namespace branding_calculator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FileController : ControllerBase
    {
        private readonly IFileService _fileService;
        private readonly string _uploadFolder;

        public FileController(IFileService fileService, IConfiguration configuration)
        {
            _fileService = fileService;
            _uploadFolder = configuration.GetValue<string>("UploadFolder") ?? "uploads";
        }

        /// <summary>
        /// Загрузка файла на сервер
        /// </summary>
        /// <param name="file">Файл для загрузки</param>
        /// <returns>Путь к сохранённому файлу</returns>
        [HttpPost("upload")]
        public async Task<ActionResult<string>> UploadFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("File is empty or not provided");
            }

            // Проверка размера файла (максимум 50 МБ)
            const int maxFileSize = 50 * 1024 * 1024; // 50 MB
            if (file.Length > maxFileSize)
            {
                return BadRequest($"File size exceeds the maximum limit of {maxFileSize / (1024 * 1024)} MB");
            }

            try
            {
                var filePath = await _fileService.SaveFileAsync(file, _uploadFolder);
                return Ok(new 
                { 
                    filePath = filePath,
                    fileName = Path.GetFileName(file.FileName),
                    fileSize = file.Length,
                    contentType = file.ContentType
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error uploading file: {ex.Message}");
            }
        }

        /// <summary>
        /// Скачивание файла по пути
        /// </summary>
        /// <param name="filePath">Путь к файлу</param>
        /// <returns>Файл</returns>
        [HttpGet("download")]
        public async Task<IActionResult> DownloadFile([FromQuery] string filePath)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                return BadRequest("File path is required");
            }

            try
            {
                var fileBytes = await _fileService.GetFileAsync(filePath);
                var fileName = Path.GetFileName(filePath);
                var contentType = GetContentType(fileName);
                
                return File(fileBytes, contentType, fileName);
            }
            catch (FileNotFoundException)
            {
                return NotFound("File not found");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error downloading file: {ex.Message}");
            }
        }

        /// <summary>
        /// Удаление файла по пути
        /// </summary>
        /// <param name="filePath">Путь к файлу</param>
        /// <returns>Результат удаления</returns>
        [HttpDelete("delete")]
        public async Task<ActionResult<bool>> DeleteFile([FromQuery] string filePath)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                return BadRequest("File path is required");
            }

            try
            {
                var result = await _fileService.DeleteFileAsync(filePath);
                
                if (result)
                {
                    return Ok(new { success = true, message = "File deleted successfully" });
                }
                else
                {
                    return NotFound(new { success = false, message = "File not found" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error deleting file: {ex.Message}");
            }
        }

        /// <summary>
        /// Получение информации о файле
        /// </summary>
        /// <param name="filePath">Путь к файлу</param>
        /// <returns>Информация о файле</returns>
        [HttpGet("info")]
        public async Task<ActionResult<object>> GetFileInfo([FromQuery] string filePath)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                return BadRequest("File path is required");
            }

            try
            {
                var fullPath = Path.Combine(Directory.GetCurrentDirectory(), filePath.Replace("/", "\\"));
                
                if (!System.IO.File.Exists(fullPath))
                {
                    return NotFound("File not found");
                }

                var fileInfo = new System.IO.FileInfo(fullPath);
                
                return Ok(new
                {
                    fileName = fileInfo.Name,
                    fileSize = fileInfo.Length,
                    extension = fileInfo.Extension,
                    createdDate = fileInfo.CreationTime,
                    modifiedDate = fileInfo.LastWriteTime,
                    filePath = filePath
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error getting file info: {ex.Message}");
            }
        }

        /// <summary>
        /// Массовая загрузка файлов
        /// </summary>
        /// <param name="files">Список файлов для загрузки</param>
        /// <returns>Список путей к сохранённым файлам</returns>
        [HttpPost("upload-multiple")]
        public async Task<ActionResult<List<object>>> UploadMultipleFiles(List<IFormFile> files)
        {
            if (files == null || files.Count == 0)
            {
                return BadRequest("No files provided");
            }

            var uploadedFiles = new List<object>();
            const int maxFileSize = 50 * 1024 * 1024; // 50 MB

            foreach (var file in files)
            {
                if (file.Length > maxFileSize)
                {
                    uploadedFiles.Add(new 
                    { 
                        fileName = file.FileName,
                        error = $"File size exceeds the maximum limit of {maxFileSize / (1024 * 1024)} MB"
                    });
                    continue;
                }

                try
                {
                    var filePath = await _fileService.SaveFileAsync(file, _uploadFolder);
                    uploadedFiles.Add(new 
                    { 
                        filePath = filePath,
                        fileName = Path.GetFileName(file.FileName),
                        fileSize = file.Length,
                        contentType = file.ContentType,
                        success = true
                    });
                }
                catch (Exception ex)
                {
                    uploadedFiles.Add(new 
                    { 
                        fileName = file.FileName,
                        error = ex.Message
                    });
                }
            }

            return Ok(uploadedFiles);
        }

        /// <summary>
        /// Определение Content-Type по расширению файла
        /// </summary>
        private string GetContentType(string fileName)
        {
            var extension = Path.GetExtension(fileName).ToLowerInvariant();
            
            return extension switch
            {
                ".txt" => "text/plain",
                ".pdf" => "application/pdf",
                ".doc" => "application/msword",
                ".docx" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ".xls" => "application/vnd.ms-excel",
                ".xlsx" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                ".png" => "image/png",
                ".jpg" => "image/jpeg",
                ".jpeg" => "image/jpeg",
                ".gif" => "image/gif",
                ".svg" => "image/svg+xml",
                ".zip" => "application/zip",
                ".rar" => "application/x-rar-compressed",
                ".mp3" => "audio/mpeg",
                ".mp4" => "video/mp4",
                ".csv" => "text/csv",
                ".json" => "application/json",
                ".xml" => "application/xml",
                _ => "application/octet-stream"
            };
        }
    }
}
