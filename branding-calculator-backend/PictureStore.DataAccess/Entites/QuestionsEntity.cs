using System.ComponentModel.DataAnnotations.Schema;
using Yamal.Core.Abstractions;

namespace Yamal.DataAccess.Entites
{
    public class QuestionsEntity
    {
        public QuestionsEntity() { }

        public QuestionsEntity(QuestionsEntity question)
        {
            Id = question.Id;
            UserId = question.UserId;
            Title = question.Title;
            UserQuestion = question.UserQuestion;
            AdminResponse = question.AdminResponse;
            IsActive = question.IsActive;
            CreatedAt = question.CreatedAt;
            AnsweredAt = question.AnsweredAt;
        }

        public  int Id { get; set; }
        [Column("user_id")]
        public int UserId {  get; set; }

        public string Title { get; set; }
        [Column("user_question")]
        public string UserQuestion { get; set; }
        [Column("admin_response")]
        public string? AdminResponse { get; set; }
        [Column("is_active")]
        public bool IsActive { get; set; }
        [Column("created_at")]
        public DateTime CreatedAt { get; set; }
        [Column("Answered_at")]
        public DateTime? AnsweredAt { get; set; }

        public UserEntity User { get; set; }
    }
}
