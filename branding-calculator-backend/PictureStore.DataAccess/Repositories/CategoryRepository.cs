using Microsoft.EntityFrameworkCore;
using PictureStore.DataAccess.Entites;
using Yamal.Core.Models;

namespace Yamal.DataAccess.Repositories
{
    public class CategoryRepository : IRepository<Category>
    {
        private readonly YamalDbContext _contex;


        public CategoryRepository(YamalDbContext context)
        {
            _contex = context;
        }

        public async Task<List<Category>> Get()
        {
            return await _contex.Category
                .AsNoTracking()
                .Select(c => Category.Create(c.Id, c.Name,
                c.Description, c.SortOrder,
                c.IsActive).Category)
                .ToListAsync();
        }

        public async Task<int> Create(Category category)
        {
            var categoryEntity = new CategoriesEntity()
            {
                Name = category.Name,
                Description = category.Description,
                SortOrder = category.SortOrder,
                IsActive = category.IsActive,
            };

            await _contex.Category.AddAsync(categoryEntity);
            await _contex.SaveChangesAsync();

            return categoryEntity.Id;
        }

        public async Task<int> Update(Category category)
        {
            await _contex.Category
                .Where(x => x.Id == category.Id)
                .ExecuteUpdateAsync(e => e
                    .SetProperty(p => p.Name, category.Name)
                    .SetProperty(p => p.Description, category.Description)
                    .SetProperty(p => p.SortOrder, category.SortOrder)
                    .SetProperty(p => p.IsActive, category.IsActive));
            return category.Id;
        }

        public async Task<int> Delete(int id)
        {
            await _contex.Category
                .Where(b => b.Id == id)
                .ExecuteDeleteAsync();

            return id;
        }
    }
}
