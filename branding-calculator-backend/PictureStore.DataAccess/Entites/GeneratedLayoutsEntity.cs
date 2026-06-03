

using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System.ComponentModel.DataAnnotations.Schema;

namespace Yamal.DataAccess.Entites
{
    public class GeneratedLayoutsEntity
    {

        public GeneratedLayoutsEntity() { }

        public GeneratedLayoutsEntity (int id, int userId, int carrierTypeId, string parametersJson, string packageUrl, string outputFormats, DateTime createdAt)
        {
            Id = id;
            UserId = userId;
            CarrierTypeId = carrierTypeId;
            ParametersJson = parametersJson;
            PackageUrl = packageUrl;
            OutputFormats = outputFormats;
            CreatedAt = createdAt;

        }

        public int Id { get; set; }
        [Column("user_id")]
        public int UserId { get; set; }
        [Column("carrier_type_id")]
        public int CarrierTypeId {  get; set; }
        [Column("parameters_json")]
        public string ParametersJson { get; set; }
        [Column("package_url")]
        public string PackageUrl { get; set; }
        [Column("output_formats")]
        public string OutputFormats {  get; set; }
        [Column("created_at")]
        public DateTime CreatedAt { get; set; }

        public UserEntity User { get; set; }

        public MediaTypesEntity Media { get; set; }
    }
}
