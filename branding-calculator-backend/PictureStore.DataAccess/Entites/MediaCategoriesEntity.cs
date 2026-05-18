using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using System.Collections.Generic;
using System.Text;

namespace Yamal.DataAccess.Entites
{
    public class MediaCategoriesEntity
    {
        public MediaCategoriesEntity(){}

        public MediaCategoriesEntity(int id, string name, 
            string? description, string bgColor,
            int sortOrder, bool isActive)
        {
            Id = id;
            Name = name;
            Description = description;
            BgColor = bgColor;
            SortOrder = sortOrder;
            IsActive = isActive;
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public string BgColor { get; set; }
        public int SortOrder { get; set; }
        public bool IsActive { get; set; }

        public ICollection<MediaTypesEntity> Types { get; set; }

    }
}
