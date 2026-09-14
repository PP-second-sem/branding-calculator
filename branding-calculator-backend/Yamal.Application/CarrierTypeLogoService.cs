using Yamal.Core.Abstractions;
using Yamal.Core.Models;

namespace Yamal.Application
{
    public class CarrierTypeLogoService : ICarrierTypeLogoService
    {
        private readonly ICarriersTypeLogoRepository _repository;

        public CarrierTypeLogoService(ICarriersTypeLogoRepository repository)
            => _repository = repository;

        public async Task<List<CarrierTypeLogo>> GetByMediaTypeId(int mediaTypeId)
        {
            return await _repository.GetByMediaTypeId(mediaTypeId);
        }

        public async Task<int> CreateBinding(int mediaTypeId, int logoId, bool isRecommended)
        {
            var binding = new CarrierTypeLogo(0, mediaTypeId, logoId, isRecommended);
            return await _repository.Create(binding);
        }

        public async Task<bool> DeleteBinding(int mediaTypeId, int logoId)
        {
            return await _repository.Delete(mediaTypeId, logoId);
        }
    }
}