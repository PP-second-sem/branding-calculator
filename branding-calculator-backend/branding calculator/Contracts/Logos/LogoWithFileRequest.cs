namespace branding_calculator.Contracts.Logos
{
    public record LogoWithFileRequest(string Name, IFormFile File, bool IsActive, int SortOrder)
    {
    }
}
