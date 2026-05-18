namespace branding_calculator.Contracts.Questions
{
    public record QuestionResponse(
        int Id,
        int Userid,
        string Title,
        string UserResponse,
        string? AdminRequest,
        bool isActive,
        DateTime CreatedAt,
        DateTime? AnsweredAt)
    {
    }
}
