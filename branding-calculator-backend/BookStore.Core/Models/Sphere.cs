using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace Yamal.Core.Models
{
    public class Sphere
    {

        public const int NAME_MAX_LENGTH = 50;

        public const int CODE_MAX_LENGTH = 20;

        public Sphere (int id, string name, string code)
        {
            Id = id;
            Name = name;
            Code = code;
        }

        public int Id { get; }

        public string Name { get; } = string.Empty;

        public string Code { get; } = string.Empty;

        public static (Sphere Sphere, string Error) Create(int id, string name, string code)
        {
            var error = string.Empty;

            if (string.IsNullOrEmpty(name))
            {
                error = "Name can't be Null";
            }

            var sphere = new Sphere(id, name, code);

            return (sphere, error);
        }
    }
}
