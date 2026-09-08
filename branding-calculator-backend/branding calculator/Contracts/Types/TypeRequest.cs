namespace branding_calculator.Contracts.Types
{
    public record TypeRequest(int CategoryId, string Name, 
        string templatesJson, string colorSchemeJson,
        string parametersSchema, int SortOrder)
    {
    }
}
