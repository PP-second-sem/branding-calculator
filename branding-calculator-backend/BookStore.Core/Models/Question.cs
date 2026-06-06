

namespace Yamal.Core.Models
{
    public class Question
    {

        public Question(int id,
                        int userId,
                        string title,
                        string userQuestion,
                        string? adminResponse,
                        bool is_active,
                        DateTime createdAt,
                        DateTime? answeredAt)
        {
            Id = id;
            UserId = userId;
            Title = title;
            UserQuestion = userQuestion;
            AdminResponse = adminResponse;
            IsActive = is_active;
            CreatedAt = createdAt;
            AnsweredAt = answeredAt;
        }






        public int Id { get; }
        public int UserId { get; }

        public string Title { get; }

        public string UserQuestion { get; }

        public string? AdminResponse { get; }

        public bool IsActive { get; } = true;

        public DateTime CreatedAt { get; }

        public DateTime? AnsweredAt { get; }
    }
}
