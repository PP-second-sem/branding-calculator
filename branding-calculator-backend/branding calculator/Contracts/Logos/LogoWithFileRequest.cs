namespace branding_calculator.Contracts.Logos
{
    public class LogoWithFileRequest
    {
        public string Name { get; set; } = string.Empty;
        public bool IsActive { get; set; } = true;
        public int SortOrder { get; set; } = 0;
        public IFormFile? File { get; set; }
    }

   
}