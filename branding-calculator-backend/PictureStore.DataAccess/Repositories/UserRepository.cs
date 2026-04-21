using Microsoft.EntityFrameworkCore;
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
                Email = entity.Email,
                PasswordHash = entity.PasswordHash,
                FirstName = entity.FirstName,
                LastName = entity.LastName,
                MiddleName = entity.MiddleName,
                PhoneNumber = entity.PhoneNumber,
                Organization = entity.Organization,
                Role = entity.Role,
                IsActive = entity.IsActive,
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
                .Select(u => User.Create(u.Id, u.Email, u.PasswordHash,
                u.FirstName, u.LastName, u.MiddleName,
                u.PhoneNumber, u.Organization, u.Role, u.IsActive).user)
                .ToListAsync();
        }

        public async Task<User> GetByEmail(string email)
        {
            return await _context.Users
                .AsNoTracking()
                .Where(u => u.Email == email)
                .Select(u => User.Create(u.Id, u.Email, u.PasswordHash,
                u.FirstName, u.LastName, u.MiddleName,
                u.PhoneNumber, u.Organization, u.Role, u.IsActive).user)
                .FirstOrDefaultAsync();

        }

        public async Task<int> Update(User entity)
        {
            await _context.Users
                .Where(x => x.Id == entity.Id)
                .ExecuteUpdateAsync(e => e
                .SetProperty(u => u.Id, entity.Id)
                .SetProperty(u => u.Email, entity.Email)
                .SetProperty(u => u.PasswordHash, entity.PasswordHash)
                .SetProperty(u => u.FirstName, entity.FirstName)
                .SetProperty(u => u.LastName, entity.LastName)
                .SetProperty(u => u.MiddleName, entity.MiddleName)
                .SetProperty(u => u.PhoneNumber, entity.PhoneNumber)
                .SetProperty(u => u.Organization, entity.Organization)
                .SetProperty(u => u.Role, entity.Role)
                .SetProperty(u => u.IsActive, entity.IsActive));

            return entity.Id;
        }
    }
}
