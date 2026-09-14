using System.ComponentModel.DataAnnotations.Schema;

namespace Yamal.DataAccess.Entites
{
    public class QuestionsEntity
    {
        public QuestionsEntity() { }

        public QuestionsEntity(QuestionsEntity question)
        {
            Id = question.Id;
            UserEmail = question.UserEmail;
            Title = question.Title;
            UserQuestion = question.UserQuestion;
            CreatedAt = question.CreatedAt;
        }

        public int Id { get; set; }
        [Column("user_email")]
        public string UserEmail { get; set; }
        public string Title { get; set; }
        [Column("user_question")]
        public string UserQuestion { get; set; }
        [Column("created_at")]
        public DateTime CreatedAt { get; set; }
        
    }
}
