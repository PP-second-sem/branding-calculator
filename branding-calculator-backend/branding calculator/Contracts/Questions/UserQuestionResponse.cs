namespace branding_calculator.Contracts.Questions
{
    public record UserQuestionResponse(
        int Id,
        int Userid,
        string UserEmal,
        string Username,
        string Title,
        string UserRequest,
        string? AdminResponse,
        bool IsActive,
        DateTime CreatedAt,
        DateTime? AnsweredAt)
    {
    }

}
