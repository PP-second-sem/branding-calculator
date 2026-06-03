using Yamal.Core.Models;

namespace Yamal.DataAccess.Repositories
{
    public interface IQuestionRepository
    {
        Task<int> Create(Question question);
        Task<int> Delete(int id);
        Task<List<Question>> Get();
        Task<Question> GetById(int id);
        Task<int> Update(Question entity);
        Task<List<Question>> GetUsersQuestions(int userId);
    }
}