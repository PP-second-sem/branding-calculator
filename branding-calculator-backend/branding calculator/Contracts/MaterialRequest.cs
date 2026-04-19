using Microsoft.AspNetCore.Http;
namespace branding_calculator.Contracts
{
    public record MaterialRequest
    {
        public int Id { get; set; }
        public string Category { get; set; } = string.Empty;
        public string? Sphere { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? City { get; set; }
        public string? Color { get; set; }
        public string? PreviewUrl { get; set; }
        public string FilePath { get; set; } = string.Empty;
        public string FileType { get; set; } = string.Empty;
        public int FileSize { get; set; }
    }
}
