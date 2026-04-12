using Microsoft.VisualBasic.FileIO;
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

        public int Category { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string City { get; set; }

        public string Color { get; set; }

        public bool IsDownloadable { get; set; }

        public string PreviewUrl { get; set; }

        public string FilePath { get; set; }

        public string FileType { get; set; }

        public int FileSize { get; set; }

        public DateTime CreatedAt { get; set; }

    }
}
