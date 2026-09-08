namespace Yamal.Core.Models
{
    public class Question
    {

        public Question(int id,
                        string userName,
                        string userEmail,
                        string title,
                        string userQuestion,
                        DateTime createdAt)
        {
            Id = id;
            UserName = userName;
            UserEmail =  userEmail;
            Title = title;
            UserQuestion = userQuestion;
            CreatedAt = createdAt;
        }






        public int Id { get; }
        public string UserName { get; }
        public string UserEmail { get; }
        public string Title { get; }

        public string UserQuestion { get; }
        
        public DateTime CreatedAt { get; }
    }
}
