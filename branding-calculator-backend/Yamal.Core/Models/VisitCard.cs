using System.ComponentModel.DataAnnotations;

namespace Yamal.Core.Models
{
    public class VisitCard
    {
        public string Surname { get; set; }

        public string Name { get; set; }

        public string Patronymic { get; set; }

        public string? Position { get; set; }
        public string? Phone { get; set; }
        public string? MobilePhone { get; set; }

        [EmailAddress]
        public string? Email { get; set; }

        public string? address { get; set; }
    }
}
