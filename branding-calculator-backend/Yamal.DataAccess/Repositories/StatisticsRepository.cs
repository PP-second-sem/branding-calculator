using Yamal.Core.Models;
using Yamal.Core.Abstractions;

namespace Yamal.DataAccess.Repositories
{
    public class StatisticsRepository : IStatisticsRepository
    {
        private readonly YamalDbContext _context;

        public StatisticsRepository(YamalDbContext context)
        {
            _context = context;
        }

        public async Task<List<StatisticResponse>> GetStatisticsAsync()
        {

            var types = await new MediaTypeRepository(_context).Get();

            var generates = await new GeneratedLayoutRepository(_context).GetAll();

            var response = types.Select(t => new StatisticResponse
            {
                MeterialTypeId = t.Id,
                MeterialTypeName = t.Name,
                GenerateCount = generates.Count(g => g.CarrierTypeId == t.Id)
            }).ToList();

            return response;
        }


    }


}
