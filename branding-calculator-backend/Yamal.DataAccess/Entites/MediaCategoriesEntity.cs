using System.ComponentModel.DataAnnotations.Schema;

namespace Yamal.DataAccess.Entites
{
    public class MediaCategoriesEntity
    {
        public MediaCategoriesEntity() { }

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
        [Column("bg_color")]
        public string BgColor { get; set; }
        [Column("sort_order")]
        public int SortOrder { get; set; }
        [Column("is_active")]
        public bool IsActive { get; set; }

        public ICollection<MediaTypesEntity> Types { get; set; }

    }
}
