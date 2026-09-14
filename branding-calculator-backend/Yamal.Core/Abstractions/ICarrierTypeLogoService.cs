using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface ICarrierTypeLogoService
    {
        Task<List<CarrierTypeLogo>> GetByMediaTypeId(int mediaTypeId);
        Task<int> CreateBinding(int mediaTypeId, int logoId, bool isRecommended);
        Task<bool> DeleteBinding(int mediaTypeId, int logoId);
    }
}
