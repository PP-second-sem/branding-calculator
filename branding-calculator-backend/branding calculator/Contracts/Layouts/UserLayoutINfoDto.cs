namespace branding_calculator.Contracts.Layouts
{
    public class UserLayoutInfoDto
    {
        public string Guid { get; set; } = string.Empty;
        public string ZipFileName { get; set; } = string.Empty;
        public string JsonFileName { get; set; } = string.Empty;
        public bool JsonExists { get; set; }
        public long FileSizeBytes { get; set; }
        public DateTime CreatedAtUtc { get; set; }
    }
}
