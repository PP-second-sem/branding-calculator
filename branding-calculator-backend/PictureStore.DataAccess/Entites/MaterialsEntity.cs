using System;
using System.Collections.Generic;
using System.Text;

namespace PictureStore.DataAccess.Entites
{
    public class MaterialsEntity
    {
        public MaterialsEntity() { }

        public MaterialsEntity(MaterialsEntity material)
        {
            Id = material.Id;
            CategoryId = material.CategoryId;
            SphereId = material.SphereId;
            Name = material.Name;
            Description = material.Description;
            PreviesUrl = material.PreviesUrl;
            UpdateAt = material.UpdateAt;
            IsDownloadable = material.IsDownloadable;
        }


        public int Id { get; set; }

        public int CategoryId {  get; set; }

        public int? SphereId { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string PreviesUrl { get; set; } = string.Empty;

        public DateTime UpdateAt { get; set; }

        public bool IsDownloadable { get; set; }

    }
}
