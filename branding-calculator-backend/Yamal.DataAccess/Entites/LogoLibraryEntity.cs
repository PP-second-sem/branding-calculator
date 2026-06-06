using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Yamal.DataAccess.Entites
{
    public class LogoLibraryEntity
    {
        public LogoLibraryEntity() { }

        public LogoLibraryEntity(int id,
                                    string name,
                                    string filePath,
                                    string fileType,
                                    bool isActive,
                                    int sortOrder) 
        {
            Id = id;
            Name = name;
            FilePath = filePath;
            FileType = fileType;
            IsActive = isActive;
            SortOrder = sortOrder;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        [Column("file_path")]
        public string FilePath { get; set; }
        [Column("file_type")]
        public string FileType { get; set; }
        [Column("is_active")]
        public bool IsActive {  get; set; }
        [Column("sort_order")]
        public int SortOrder { get; set; }
    }
}
