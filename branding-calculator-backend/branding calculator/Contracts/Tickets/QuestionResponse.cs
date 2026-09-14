namespace branding_calculator.Contracts.Tickets
{
    public record QuestionResponse(int Id, string UserEmail, string Title, string UserQuestion, DateTime CreatedAt)
    {
    }
}
