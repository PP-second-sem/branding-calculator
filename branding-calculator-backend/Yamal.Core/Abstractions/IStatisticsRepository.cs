using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface IStatisticsRepository
    {
        Task<List<StatisticResponse>> GetStatisticsAsync();
    }
}