

namespace Yamal.Core.Models
{
    public class MediaCategory
    {

        public MediaCategory(int id, string name,
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
    }
}
