namespace branding_calculator.Contracts.Logos
{ 
    public record LogoResponse(string Name, string FilePath,
        string FileType, bool IsActive, int SortOrder)
    {
    }
}
