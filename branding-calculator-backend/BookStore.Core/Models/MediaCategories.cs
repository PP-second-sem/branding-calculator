

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

        public int Id { get; }
        public string Name { get; }
        public string? Description { get;  }
        public string BgColor { get;  }
        public int SortOrder { get;  }
        public bool IsActive { get;  }
    }
}
