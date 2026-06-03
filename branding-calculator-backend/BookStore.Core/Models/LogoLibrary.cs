namespace Yamal.Core.Models
{
    public class LogoLibrary
    {

        public LogoLibrary(int id,
                            string name,
                            string filePath,
                            string fileType,
                            bool isActive,
                            int sortOrder)
        {
            this.Id = id;
            Name = name;
            FilePath = filePath;
            FileType = fileType;
            IsActive = isActive;
            SortOrder = sortOrder;
        }

        public int Id { get;  }
        public string Name { get;  }
        public string FilePath { get;  }
        public string FileType { get; }
        public bool IsActive { get; }
        public int SortOrder { get; }
    }
}
