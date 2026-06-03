namespace branding_calculator.Contracts.Questions
{
    public record QuestionCreateRequest
    {
        public string Title { get; set; }

        public string UserQuestion {  get; set; }
        
    }
}
