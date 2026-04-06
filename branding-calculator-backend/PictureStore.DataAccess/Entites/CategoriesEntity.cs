using System;
using System.Collections.Generic;
using System.Text;

namespace PictureStore.DataAccess.Entites
{
    public class CategoriesEntity
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public int SortOrder { get; set; }

        public bool IsActive { get; set; }

    }
}
