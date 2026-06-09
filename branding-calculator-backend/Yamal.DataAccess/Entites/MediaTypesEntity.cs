using System.ComponentModel.DataAnnotations.Schema;

namespace Yamal.DataAccess.Entites
{
    public class MediaTypesEntity
    {
        public MediaTypesEntity() { }

        public MediaTypesEntity(int id, int categoryId,
            string name,
            int sortOrder, bool isActive)
        {
            Id = id;
            CategoryId = categoryId;
            Name = name;
            SortOrder = sortOrder;
            IsActive = isActive;
        }

        public int Id { get; set; }
        [Column("category_id")]
        public int CategoryId { get; set; }
        public string Name { get; set; }
        [Column("sort_order")]
        public int SortOrder { get; set; }
        [Column("is_active")]
        public bool IsActive { get; set; }

        public MediaCategoriesEntity Category { get; set; }

        public ICollection<GeneratedLayoutsEntity> GeneratedLayouts { get; set; }

    }
}
