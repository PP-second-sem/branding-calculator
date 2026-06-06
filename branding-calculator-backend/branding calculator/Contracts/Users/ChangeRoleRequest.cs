using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Yamal.Core.Abstractions;

namespace branding_calculator.Contracts.Users
{
    public class ChangeRoleRequest
    {
        [Required]
        public string Email { get; set; }
        [Required]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public Role Role { get; set; }
    }
}
