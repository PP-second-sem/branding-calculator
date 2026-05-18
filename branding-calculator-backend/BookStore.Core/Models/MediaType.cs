namespace Yamal.Core.Models
{
    public class MediaType
    {

        public MediaType(int id, int categoryId,
            string name, string parametersSchema,
            int sortOrder, bool isActive)
        {
            Id = id;
            CategoryId = categoryId;
            Name = name;
            ParametersSchema = parametersSchema;
            SortOrder = sortOrder;
            IsActive = isActive;
        }

        public int Id { get;  }

        public int CategoryId { get; }

        public string Name { get; }

        public string ParametersSchema { get; }

        public int SortOrder { get; }

        public bool IsActive { get; }
    }
}
