namespace Yamal.Core.Models
{
    public class GeneratedLayout
    {
        public GeneratedLayout(int id,
                               int userId,
                               int carrierTypeId,
                               string parametersJson,
                               string packageUrl,
                               string outputFormats,
                               DateTime createdAt)
        {
            Id = id;
            UserId = userId;
            CarrierTypeId = carrierTypeId;
            ParametersJson = parametersJson;
            PackageUrl = packageUrl;
            OutputFormats = outputFormats;
            CreatedAt = createdAt;

        }

        public int Id { get; }

        public int UserId { get; }

        public int CarrierTypeId { get; }

        public string ParametersJson { get; }

        public string PackageUrl { get; }

        public string OutputFormats { get; }

        public DateTime CreatedAt { get; }

    }
}
