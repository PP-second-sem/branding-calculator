namespace branding_calculator.Contracts.Types
{
    public record TypeRequest(int CategoryId, string Name, string TemplatesJson,
        string ColorSchemeJson, string ParametersSchema, int SortOrder)
    {
    }
}
