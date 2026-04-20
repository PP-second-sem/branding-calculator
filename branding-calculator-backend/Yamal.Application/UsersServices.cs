using Yamal.Core.Abstractions;
using Yamal.Core.Models;
using Yamal.DataAccess.Repositories;
using YamalBrand.Infrastructure;

namespace Yamal.Application
{
    public class UsersServices : IUsersServices
    {
        private readonly IUserRepository _userRepository;

        private readonly IPasswordHasher _passwordHasher;

        public UsersServices(IUserRepository userRepository, IPasswordHasher passwordHasher)
        {
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
        }

        public async Task<int> CreateUser(User user)
        {
            var hashedPassword = _passwordHasher.Generate(user.Password);

            var newUser = User.Create(
                user.Id, user.Email, hashedPassword,
                user.FirstName, user.LastName, user.MiddleName,
                user.PhoneNumber, user.Organization, user.Role,
                user.IsActive
                ).user;

            return await _userRepository.Create(newUser);
        }

        public async Task<int> DeleteUser(int id)
        {
            return await _userRepository.Delete(id);
        }

        public async Task<List<User>> GetAllUser()
        {
            return await _userRepository.GetAll();
        }

        public async Task<User> GetUserByEmail(string email)
        {
            return await _userRepository.GetByEmail(email);
        }

        public async Task<int> UpdateEntity(User user)
        {
            return await _userRepository.Update(user);
        }

        //public async Task<string> Login()
        //{

        //}
    }
}
