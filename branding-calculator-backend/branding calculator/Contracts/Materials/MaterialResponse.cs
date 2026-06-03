namespace branding_calculator.Contracts.Materials
{
    public record MaterialResponse(int Id,
                                   string Category,
                                   string? Sphere,
                                   string Name,
                                   string? Description,
                                   string? City,
                                   string? Color,
                                   string? PreviewUrl,
                                   string FilePath,
                                   string FileType,
                                   int FileSize)
    {
    }
}
