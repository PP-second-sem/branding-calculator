using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace PictureStore.DataAccess.Entites
{
    public class FilesEntity
    {
        public FilesEntity() { }

        public FilesEntity(FilesEntity file)
        {
            Id = file.Id;
            MaterialId = file.MaterialId;
            FilePath = file.FilePath;
            FileType = file.FileType;
            FileSize = file.FileSize;
            CreatedAt = file.CreatedAt;
        }
        
        public int Id { get; set; }

        public int MaterialId { get; set; }

        public string FilePath { get; set; } = string.Empty;

        public string FileType { get; set; } = string.Empty;

        public int FileSize { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
