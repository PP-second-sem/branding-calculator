namespace branding_calculator.Contracts.MediaCategories
{
    public record CategoryRequest(string Name, string Description, bool IsActive, int SortOrder)
    {
    }
}
