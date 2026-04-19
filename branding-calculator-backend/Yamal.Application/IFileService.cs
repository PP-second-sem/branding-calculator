using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace Yamal.Application
{
    public interface IFileService
    {
        Task<string> SaveFileAsync(IFormFile file, string folder);
        Task<bool> DeleteFileAsync(string filePath);
        Task<byte[]> GetFileAsync(string filePath);
    }

    public class FileService : IFileService
    {
        private readonly string _basePath;

        public FileService(string basePath)
        {
            _basePath = basePath;
        }

        public async Task<string> SaveFileAsync(IFormFile file, string folder)
        {
            if (file == null || file.Length == 0)
            {
                throw new ArgumentException("File is empty");
            }

            // Создаем уникальное имя файла
            var uniqueFileName = $"{Guid.NewGuid()}_{file.FileName}";
            var folderPath = Path.Combine(_basePath, folder);
            
            // Создаем папку если не существует
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            var filePath = Path.Combine(folderPath, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Возвращаем относительный путь для хранения в БД
            return Path.Combine(folder, uniqueFileName).Replace("\\", "/");
        }

        public Task<bool> DeleteFileAsync(string filePath)
        {
            var fullPath = Path.Combine(_basePath, filePath.Replace("/", "\\"));
            
            if (File.Exists(fullPath))
            {
                File.Delete(fullPath);
                return Task.FromResult(true);
            }

            return Task.FromResult(false);
        }

        public Task<byte[]> GetFileAsync(string filePath)
        {
            var fullPath = Path.Combine(_basePath, filePath.Replace("/", "\\"));
            
            if (File.Exists(fullPath))
            {
                return Task.FromResult(File.ReadAllBytes(fullPath));
            }

            throw new FileNotFoundException($"File not found: {filePath}");
        }
    }
}
