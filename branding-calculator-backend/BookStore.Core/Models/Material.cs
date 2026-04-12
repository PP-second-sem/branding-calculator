using System;
using System.Collections.Generic;
using System.Text;

namespace Yamal.Core.Models
{
    public class Material
    {
        public const int NAME_MAX_LENGTH = 100;

        public const int DESCRIPTION_MAX_LENGTH = 500;

        public const int PREVIEW_URL_MAX_LENGTH = 255;



        public Material(int id, string category,
                        string sphere,
                        string name, string description,
                        string city, string color,
                        bool isDownloadable, string previewUrl,
                        string filePath, string fileType,
                        int fileSize, DateTime createdAt)
        {
            Id = id;
            Category = category;
            Sphere = sphere;
            Name = name;
            Description = description;
            City = city;
            Color = color;
            IsDownloadable = isDownloadable;
            PreviewUrl = previewUrl;
            FilePath = filePath;
            FileType = fileType;
            FileSize = fileSize;
            CreatedAt = createdAt;
        }

        public int Id { get; }

        public string Category { get; }

        public string Sphere { get; }

        public string Name { get; }

        public string Description { get; }

        public string City { get; }

        public string Color { get; }

        public bool IsDownloadable { get; }

        public string PreviewUrl { get; }

        public string FilePath { get; }

        public string FileType { get; }

        public int FileSize { get; }

        public DateTime CreatedAt { get; }


        public static (Material Materil, string Error) Create(int id, string category,
                                                            string sphere,
                                                            string name, string description,
                                                            string city, string color,
                                                            bool isDownloadable, string previewUrl,
                                                            string filePath, string fileType,
                                                            int fileSize, DateTime creatAt)
        {
            var error = string.Empty;

            if (string.IsNullOrEmpty(name))
            {
                error = "Name can't be null";
            }

            var material = new Material(id, category,
                                        sphere,
                                        name, description,
                                        city, color,
                                        isDownloadable, previewUrl,
                                        filePath, fileType,
                                        fileSize, creatAt);
            
            
            return (material, error);
        }
    }
}
