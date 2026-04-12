using Microsoft.VisualBasic.FileIO;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;
using System.Xml.Linq;
using Yamal.Core.Models;

namespace Yamal.DataAccess.Entites
{
    public class MaterialsEntity
    {
        public MaterialsEntity() { }

        public MaterialsEntity(MaterialsEntity material)
        {
            Id = material.Id;
            Category = material.Category;
            Sphere = material.Sphere;
            Name = material.Name;
            Description = material.Description;
            City = material.City;
            Color = material.Color;
            IsDownloadable = material.IsDownloadable;
            PreviewUrl = material.PreviewUrl;
            FilePath = material.FilePath;
            FileType = material.FileType;
            FileSize = material.FileSize;
            CreatedAt = material.CreatedAt;
        }


        public int Id { get; set; }

        public string Category { get; set; }

        public string Sphere { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string City { get; set; } = string.Empty;

        public string Color { get; set; } = string.Empty;

        [Column("is_downloadable")]
        public bool IsDownloadable { get; set; }

        [Column("preview_url")]
        public string PreviewUrl { get; set; } = string.Empty;

        [Column("file_path")]
        public string FilePath { get; set; } = string.Empty;

        [Column("file_type")]
        public string FileType { get; set; } = string.Empty;

        [Column("file_size")]
        public int FileSize { get; set; }

        [Column("create_at")]
        public DateTime CreatedAt { get; set; }

    }
}
