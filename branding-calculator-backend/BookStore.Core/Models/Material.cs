using System;
using System.Collections.Generic;
using System.Text;
using Yamal.Core.Models;

namespace BookStore.Core.Models
{
    public class Material
    {
        public const int NAME_MAX_LENGTH = 100;

        public const int DESCRIPTION_MAX_LENGTH = 500;

        public const int PREVIEW_URL_MAX_LENGTH = 255;

        public Material(int id, int categoryId, int sphereId, string name,
            string description, string previesUrl, DateTime updateAt, bool isDownloadedble)
        {
            Id = id;
            CategoryId = categoryId;
            SphereId = sphereId;
            Name = name;
            Description = description;
            PreviesUrl = previesUrl;
            UpdateAt = updateAt;
            IsDownloadable = isDownloadedble;
        }

        public int Id { get; }

        public int CategoryId { get; }

        public int? SphereId { get; }

        public string Name { get; }

        public string Description { get; }

        public string PreviesUrl { get; }

        public DateTime UpdateAt { get; }

        public bool IsDownloadable { get; }

        public Category Category { get; }

        public Sphere Sphere { get; }

        public static (Material Materil, string Error) Create(int id, int categoryId, int sphereId, string name,
            string description, string previesUrl, DateTime updateAt, bool isDownloadedble)
        {
            var error = string.Empty;

            if (string.IsNullOrEmpty(name))
            {
                error = "Name can't be null";
            }

            var material = new Material(id, categoryId, sphereId, name, description, previesUrl, updateAt, isDownloadedble);
            
            
            return (material, error);
        }
    }
}
