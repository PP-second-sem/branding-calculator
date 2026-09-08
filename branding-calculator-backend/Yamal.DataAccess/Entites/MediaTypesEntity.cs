using System.ComponentModel.DataAnnotations.Schema;

namespace Yamal.DataAccess.Entites
{
    public class MediaTypesEntity
    {
        public MediaTypesEntity() { }

        public MediaTypesEntity(int id, int categoryId,
            string name, string templatesJson, string colorSchemesJson,
            string parametersSchema,int sortOrder, bool isActive)
        {
            Id = id;
            CategoryId = categoryId;
            Name = name;
            TemplatesJson = templatesJson;
            ColorSchemesJson = colorSchemesJson;
            ParametersSchema = parametersSchema;
            SortOrder = sortOrder;
            IsActive = isActive;
        }

        public int Id { get; set; }
        [Column("category_id")]
        public int CategoryId { get; set; }
        public string Name { get; set; }
        [Column("templates_json")]
        public string TemplatesJson { get; set; }
        [Column("color_schemes_json")]
        public string ColorSchemesJson { get; set; }
        [Column("parameters_schema")]
        public string ParametersSchema { get; set; }
        [Column("sort_order")]
        public int SortOrder { get; set; }
        [Column("is_active")]
        public bool IsActive { get; set; }

        public MediaCategoriesEntity Category { get; set; }

        public ICollection<CarrierTypeLogosEntity> CarrierTypes { get; set; }

    }
}
