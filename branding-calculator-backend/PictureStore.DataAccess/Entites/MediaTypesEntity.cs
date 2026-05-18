namespace Yamal.DataAccess.Entites
{
    public class MediaTypesEntity
    {
        public MediaTypesEntity () { }

        public MediaTypesEntity (int id, int categoryId, 
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

        public int Id { get; set; }

        public int CategoryId { get; set; }

        public string Name { get; set; }

        public string ParametersSchema { get; set; }

        public int SortOrder { get; set; }

        public bool IsActive { get; set;}

        public MediaCategoriesEntity Category { get; set; }

    }
}
