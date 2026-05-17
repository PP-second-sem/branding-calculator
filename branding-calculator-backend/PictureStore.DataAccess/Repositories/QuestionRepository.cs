using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
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
                UserId = question.UserId,
                Title = question.Title,
                UserQuestion = question.UserQuestion,
                AdminResponse = null,
                IsActive = true,
                CreatedAt = DateTime.Now,
                AnsweredAt = null,
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

        public async Task<List<Question>> Get()
        {
            return await _context.Questions
                .AsNoTracking()
                .Select(q => new Question(q.Id, q.UserId, q.Title,
                q.UserQuestion, q.AdminResponse, q.IsActive,
                q.CreatedAt, q.AnsweredAt)).ToListAsync();

        }

        public async Task<int> Update(Question entity)
        {
            await _context.Questions
                .Where(x => x.Id == entity.Id)
                .ExecuteUpdateAsync(e => e
                .SetProperty(p => p.Title, entity.Title)
                .SetProperty(p => p.UserQuestion, entity.UserQuestion)
                .SetProperty(p => p.AdminResponse, entity.AdminResponse)
                .SetProperty(p => p.IsActive, entity.IsActive)
                .SetProperty(p => p.AnsweredAt, entity.AnsweredAt));
            await _context.SaveChangesAsync();
            return entity.Id;
        }

        public async Task<Question> GetById(int id)
        {
            return await _context.Questions
                .Where(e => e.Id == id)
                .Select(c => new Question(c.Id, c.UserId, c.Title,
                c.UserQuestion, c.AdminResponse,
                c.IsActive, c.CreatedAt, c.AnsweredAt)).FirstOrDefaultAsync();
        }

        public async Task<List<Question>> GetUsersQuestions(int userId)
        {
            return await _context.Questions
                .AsNoTracking()
                .Where(q => q.UserId == userId)
                .Select(q => new Question(q.Id, q.UserId,
                q.Title, q.UserQuestion,
                q.AdminResponse, q.IsActive,
                q.CreatedAt, q.AnsweredAt))
                .ToListAsync();
        }
    }
}
