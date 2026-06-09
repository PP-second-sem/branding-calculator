using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface IQuestionServices
    {
        Task<int> CreateEntity(Question entity);
        Task<int> DeleteEntity(int id);
        Task<List<Question>> GetAllEntities();
        Task<int> UpdateEntity(Question entity);
        Task<Question> GetByIdQuestion(int id);
        Task<List<Question>> GetUserQuestions(int userId);


    }
}