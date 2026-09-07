using Microsoft.EntityFrameworkCore;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly YamalDbContext _context;

        public QuestionRepository(YamalDbContext context) => _context = context;

        public async Task<int> Create(Question question)
        {
            var questionEntity = new QuestionsEntity()
            {
                UserName = question.UserName,
                Title = question.Title,
                UserQuestion = question.UserQuestion,
                UserEmail = question.UserEmail,
                CreatedAt = DateTime.Now,
            };

            await _context.Questions.AddAsync(questionEntity);
            await _context.SaveChangesAsync();

            return questionEntity.Id;

        }

        public async Task<int> Delete(int id)
        {
            await _context.Questions
                .Where(q => q.Id == id)
                .ExecuteDeleteAsync();
            await _context.SaveChangesAsync();
            return id;
        }

        public async Task<List<Question>> GetAll()
        {
            return await _context.Questions
                .AsNoTracking()
                .Select(q => new Question(q.Id, q.UserName, 
                q.UserEmail, q.Title,
                q.UserQuestion, q.CreatedAt)).ToListAsync();

        }

        public async Task<int> Update(Question entity)
        {
            await _context.Questions
                .Where(x => x.Id == entity.Id)
                .ExecuteUpdateAsync(e => e
                    .SetProperty(p => p.Title, entity.Title)
                    .SetProperty(p => p.UserName, entity.UserName)
                    .SetProperty(p => p.UserEmail, entity.UserEmail)
                    .SetProperty(p => p.UserQuestion, entity.UserQuestion));
            return entity.Id;
        }

        public async Task<Question> GetById(int id)
        {
            return await _context.Questions
                .Where(e => e.Id == id)
                .Select(c => new Question(c.Id, c.UserName,
                        c.UserEmail, c.Title,
                        c.UserQuestion, c.CreatedAt)).FirstOrDefaultAsync();
        }


    }
}
