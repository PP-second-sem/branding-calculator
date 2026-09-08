namespace branding_calculator.Contracts.Materials
{
    public class MaterialWithFileRequest
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public string? City { get; set; } = string.Empty;
        public string? Color { get; set; } = string.Empty;
        public string? PreviewUrl { get; set; } = string.Empty;
        public IFormFile? File { get; set; }
    }
}
