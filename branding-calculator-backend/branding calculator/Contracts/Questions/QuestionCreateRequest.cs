namespace branding_calculator.Contracts.Questions
{
    public record QuestionCreateRequest
    {
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string Title { get; set; }
        public string UserQuestion { get; set; }

    }
}
