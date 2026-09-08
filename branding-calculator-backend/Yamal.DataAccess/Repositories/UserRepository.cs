using Microsoft.EntityFrameworkCore;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly YamalDbContext _context;

        public UserRepository(YamalDbContext context)
        {
            _context = context;
        }

        public async Task<int> Create(User entity)
        {
            var user = new UserEntity()
            {
                PasswordHash = entity.Password,
                Role = entity.Role.ToString(),
            };

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user.Id;
        }

        public async Task<int> Delete(int id)
        {
            await _context.Users
                .Where(u => u.Id == id)
                .ExecuteDeleteAsync();
            return id;
        }

        public async Task<List<User>> GetAll()
        {
            return await _context.Users
                .AsNoTracking()
                .Select(u => User.Create(u.Id, u.Login, u.PasswordHash, 
                    Enum.Parse<Role>(u.Role, true)).user)
                .ToListAsync();
        }

        public async Task<User> GetByLogin(string login)
        {
            return await _context.Users
                .AsNoTracking()
                .Where(u => u.Login == login)
                .Select(u => User.Create(u.Id, u.Login, u.PasswordHash,
                 Enum.Parse<Role>(u.Role, true)).user)
                .FirstOrDefaultAsync();
        }

        public async Task<User> GetById(int id)
        {
            return await _context.Users
               .AsNoTracking()
               .Where(u => u.Id == id)
               .Select(u => User.Create(u.Id, u.Login, u.PasswordHash, 
                   Enum.Parse<Role>(u.Role, true)).user)
               .FirstOrDefaultAsync();
        }

        public async Task<int> Update(User entity)
        {
            await _context.Users
                .Where(x => x.Id == entity.Id)
                .ExecuteUpdateAsync(e => e
                    .SetProperty(u => u.Id, entity.Id)
                    .SetProperty(u => u.PasswordHash, entity.Password)
                    .SetProperty(u => u.Role, entity.Role.ToString()));
            return entity.Id;
        }

    }
}
