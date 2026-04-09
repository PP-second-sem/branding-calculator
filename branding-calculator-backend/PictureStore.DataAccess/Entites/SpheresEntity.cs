using System;
using System.Collections.Generic;
using System.Text;

namespace PictureStore.DataAccess.Entites
{
    public class SpheresEntity
    {
        public SpheresEntity() { }

        public SpheresEntity(SpheresEntity sphere)
        {
            Id = sphere.Id;
            Name = sphere.Name;
            Code = sphere.Code;
        }
        
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Code { get; set; } = string.Empty;
    }
}
