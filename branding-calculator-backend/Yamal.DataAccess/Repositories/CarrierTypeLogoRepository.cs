using Microsoft.EntityFrameworkCore;
using Yamal.Core.Abstractions;
using Yamal.Core.Models;
using Yamal.DataAccess.Entites;

namespace Yamal.DataAccess.Repositories;

public class CarrierTypeLogoRepository : IRepository<CarrierTypeLogo>
{
    private readonly YamalDbContext _context;
    
    public CarrierTypeLogoRepository(YamalDbContext context) => _context = context;
    

    public async Task<int> Create(CarrierTypeLogo entity)
    {
        var TypeLogo = new CarrierTypeLogosEntity()
        {
            CarrierTypeId = entity.CarrierTypeId,
            LogoId = entity.LogoId,
            IsRecommended = entity.IsRecommended,
        };
        
        await _context.CarrierTypeLogos.AddAsync(TypeLogo);
        await _context.SaveChangesAsync();
        
        return TypeLogo.Id;
    }

    public async Task<int> Delete(int id)
    {
        await _context.CarrierTypeLogos
            .Where(l => l.Id == id)
            .ExecuteDeleteAsync();
        return id;
    }

    public async Task<List<CarrierTypeLogo>> Get()
    {
        return await _context.CarrierTypeLogos
            .AsNoTracking()
            .Select(c => new CarrierTypeLogo(
                    c.Id, c.CarrierTypeId,
                    c.LogoId, c.IsRecommended))
            .ToListAsync();
    }

    public Task<int> Update(CarrierTypeLogo entity)
    {
        throw new NotImplementedException();
    }


}