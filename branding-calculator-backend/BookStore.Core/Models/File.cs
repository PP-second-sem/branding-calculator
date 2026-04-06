using BookStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Yamal.Core.Models
{
    public class File
    {

        public const int PATH_MAX_LENGTH = 255;

        public const int TYPE_MAX_LENGTH = 20;

        public File(int id, int materialId, string filePath,
           string fileType, int fileSize, DateTime createdAt)
        {
            Id = id;
            MaterialId = materialId;
            FilePath = filePath;
            FileType = fileType;
            FileSize = fileSize;
            CreatedAt = createdAt;
        }

        public int Id { get; }

        public int MaterialId { get; }

        public string FilePath { get; }

        public string FileType { get; }

        public int FileSize { get; }

        public DateTime CreatedAt { get; }


        public Material Material { get; }

        //validation
        public static (File File, string Error) Create(
            int id,
            int materialId,
            string filePath,
            string fileType,
            int fileSize,
            DateTime createdAt)
        {
            var error = string.Empty;
            if (string.IsNullOrEmpty(filePath) || string.IsNullOrEmpty(fileType))
            {
                error = "У вас есть один или несколько не заполненных значений";
            }

            var file = new File(id, materialId, filePath, fileType, fileSize, createdAt);

            return (file, error);
        }
    }
}
