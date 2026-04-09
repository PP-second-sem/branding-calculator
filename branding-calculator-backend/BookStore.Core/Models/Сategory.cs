using System;
using System.Collections.Generic;
using System.Text;

namespace Yamal.Core.Models
{
    public class Category
    {
        public const int NAME_MAX_LENGTH = 50;

        public const int DESCRIPTION_MAX_LENGTH = 200;


        public Category(
            int id,
            string name,
            string description,
            int sortOrder,
            bool isActice)
        {
            Id = id;
            Name = name; 
            Description = description;
            SortOrder = sortOrder;
            IsActive = isActice;
        }

        public int Id { get; }

        public string Name { get; } = string.Empty;

        public string Description { get; } = string.Empty;

        public int SortOrder { get; }

        public bool IsActive { get; }

        public static (Category Category, string Error) Create(int id, string name, string description, int sortOrder, bool isActice)
        {
            var error = string.Empty;

            if (string.IsNullOrEmpty(name) || name.Length > NAME_MAX_LENGTH)
            {
                error = "Name is wrong";
            }

            var category = new Category(id, name, description, sortOrder, isActice);

            return (category, error);
        }


    }
}
