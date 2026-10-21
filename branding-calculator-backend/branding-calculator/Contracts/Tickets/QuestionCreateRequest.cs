using System.ComponentModel.DataAnnotations;

namespace branding_calculator.Contracts.Tickets
{
    public record QuestionCreateRequest([EmailAddress] string UserEmail, string Title, string UserQuestion)
    {
    }
}
