using Microsoft.EntityFrameworkCore;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Repositories
{
    public class CarrierTypeLogoRepository : ICarriersTypeLogoRepository
    {
        private readonly YamalDbContext _context;

        public CarrierTypeLogoRepository(YamalDbContext context) => _context = context;

        public async Task<List<CarrierTypeLogo>> GetByMediaTypeId(int mediaTypeId)
        {
            return await _context.CarrierTypeLogos
                .Where(ml => ml.CarrierTypeId == mediaTypeId)
                .AsNoTracking()
                .Select(ml => new CarrierTypeLogo(
                    ml.Id,
                    ml.CarrierTypeId,
                    ml.LogoId,
                    ml.IsRecommended))
                .ToListAsync();
        }

        public async Task<int> Create(CarrierTypeLogo entity)
        {
            var binding = new CarrierTypeLogosEntity
            {
                CarrierTypeId = entity.CarrierTypeId,
                LogoId = entity.LogoId,
                IsRecommended = entity.IsRecommended
            };

            await _context.CarrierTypeLogos.AddAsync(binding);
            await _context.SaveChangesAsync();

            return binding.Id;
        }

        public async Task<bool> Delete(int mediaTypeId, int logoId)
        {
            var deleted = await _context.CarrierTypeLogos
                .Where(ml => ml.CarrierTypeId == mediaTypeId && ml.LogoId == logoId)
                .ExecuteDeleteAsync();

            return deleted > 0;
        }
    }
}