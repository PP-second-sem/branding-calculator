using Yamal.Core.Models;
using Yamal.Core.Abstractions;

namespace Yamal.Application
{
    public class StatisticsService : IStatisticsService
    {
        private readonly IStatisticsRepository _repository;

        public StatisticsService(IStatisticsRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<StatisticResponse>> GetStatisticsAsync()
        {
            return await _repository.GetStatisticsAsync();
        }
    }
}
