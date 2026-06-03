namespace branding_calculator.Contracts.Logos
{
    public class LogoUpdateRequest
    {
        public string Name { get; set; } = string.Empty;
        public bool IsActive { get; set; }
        public int SortOrder { get; set; }
    }

   
}