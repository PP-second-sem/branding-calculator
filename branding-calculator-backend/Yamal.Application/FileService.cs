using Yamal.Core.Abstractions;
using ExcelDataReader;
using System.Data;
using Yamal.Core.Models;

namespace Yamal.Application
{
    public class FileService : IFileService
    {
        public FileService() { }

        public async Task<List<VisitCard>> ReadFileAsync(Stream stream)
        {
            using var reader = ExcelReaderFactory.CreateReader(stream);
            var dataSet = reader.AsDataSet(new ExcelDataSetConfiguration()
            {
                ConfigureDataTable = _ => new ExcelDataTableConfiguration()
                {
                    UseHeaderRow = true
                }
            });

            return TakeAllRows(dataSet.Tables[0]);


        }

        private List<VisitCard> TakeAllRows(DataTable dataTable)
        {
            var visitCards = new List<VisitCard>();
            foreach (DataRow row in dataTable.Rows)
            {
                var visitCard = new VisitCard
                {
                    Surname = row["Фамилия"].ToString() ?? string.Empty,
                    Name = row["Имя"].ToString() ?? string.Empty,
                    Patronymic = row["Отчество"].ToString() ?? string.Empty,
                    Position = row["Должность"].ToString(),
                    Phone = row["Телефон"].ToString(),
                    MobilePhone = row["моб. Телефон"].ToString(),
                    Email = row["email"].ToString(),
                    address = row["адрес"].ToString()
                };
                visitCards.Add(visitCard);
            }
            return visitCards;
        }
    }
}
