namespace Yamal.Core.Models
{
    public class MediaType
    {

        public MediaType(int id, int categoryId,
            string name,  string templatesJson, string colorSchemesJson,
            string parametersSchema, int sortOrder, bool isActive)
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

        public int Id { get; }

        public int CategoryId { get; }

        public string Name { get; }

        public string TemplatesJson { get; }
        
        public string ColorSchemesJson { get; }
        
        public string ParametersSchema { get; }

        public int SortOrder { get; }

        public bool IsActive { get; }
    }
}
