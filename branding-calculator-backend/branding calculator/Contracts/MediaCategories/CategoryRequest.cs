namespace branding_calculator.Contracts.MediaCategories
{
    public record CategoryRequest(string Name,  string Description, string BgColor, int SortOrder, bool IsActive)
    {
    }
}
