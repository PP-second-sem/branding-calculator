using Yamal.Core.Models;

namespace Yamal.Core.Abstractions
{
    public interface IStatisticsService
    {
        Task<List<StatisticResponse>> GetStatisticsAsync();
        Task<List<StatisticResponse>> GetStatisticByTime(DateTime start, DateTime end);
    }
}