using Yamal.Core.Models;
using Yamal.DataAccess.Repositories;

namespace Yamal.Application
{
    public class QuestionServices : IQuestionServices
    {
        private readonly IQuestionRepository _questionRepository;

        public QuestionServices(IQuestionRepository questionRepository) 
            => _questionRepository = questionRepository;

        public async Task<int> CreateEntity(Question entity)
        {
            return await _questionRepository.Create(entity);
        }

        public async Task<Question> GetByIdQuestion(int id)
        {
            return await _questionRepository.GetById(id);
        }

        public async Task<int> DeleteEntity(int id)
        {
            return await _questionRepository.Delete(id);
        }

        public async Task<List<Question>> GetAllEntities()
        {
            return await _questionRepository.Get();
        }

        public async Task<int> UpdateEntity(Question entity)
        {
            return await _questionRepository.Update(entity);
        }

        public async Task<List<Question>> GetUserQuestions(int userId)
        {
            return await _questionRepository.GetUsersQuestions(userId);
        }
        


    }
}
