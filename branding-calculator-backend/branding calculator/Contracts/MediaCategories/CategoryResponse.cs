namespace branding_calculator.Contracts.MediaCategories
{
    //Задел на будующие
    public record CategoryResponse(int Id,  string Name, string? Description, string BgColor, int SortOrder, bool IsActive)
    {

    }
}
