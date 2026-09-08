using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace Yamal.Application;

public class CarrierTypeLogoService : IServices<CarrierTypeLogo>
{
    private readonly IRepository<CarrierTypeLogo> _repository;
    
    
    
    public Task<int> CreateEntity(CarrierTypeLogo entity)
    {
        return _repository.Create(entity);
    }

    public Task<int> DeleteEntity(int id)
    {
        return _repository.Delete(id);
    }

    public Task<List<CarrierTypeLogo>> GetAllEntities()
    {
        return _repository.Get();
    }

    public Task<int> UpdateEntity(CarrierTypeLogo entity)
    {
        return  _repository.Update(entity);
    }
}