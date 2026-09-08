namespace branding_calculator.Contracts.Questions
{
    public record QuestionResponse(
        int Id,
        string UserName,
        string UserEmail,
        string Title,
        string UserResponse,
        DateTime CreatedAt)
    {
    }
}
