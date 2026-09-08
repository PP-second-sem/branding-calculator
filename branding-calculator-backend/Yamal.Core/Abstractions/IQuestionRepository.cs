using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface IQuestionRepository
    {
        Task<int> Create(Question question);
        Task<int> Delete(int id);
        Task<List<Question>> GetAll();
        Task<Question> GetById(int id);
        Task<int> Update(Question entity);
    }
}