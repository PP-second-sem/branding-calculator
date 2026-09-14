using Yamal.Core.Models;
namespace Yamal.Core.Abstractions
{
    public interface ICarriersTypeLogoRepository
    {
        Task<List<CarrierTypeLogo>> GetByMediaTypeId(int mediaTypeId);
        Task<int> Create(CarrierTypeLogo entity);
        Task<bool> Delete(int mediaTypeId, int logoId);
    }
}
