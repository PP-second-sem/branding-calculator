namespace branding_calculator.Contracts.Materials
{
    public record MaterialWithFileRequest(string? Name, IFormFile File, string Description,
        string City, string Color, string PreviewUrl)
    {
    }
}
