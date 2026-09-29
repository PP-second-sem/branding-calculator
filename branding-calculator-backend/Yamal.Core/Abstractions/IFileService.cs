using System;
using System.Data;
using Yamal.Core.Models;
namespace Yamal.Core.Abstractions
{
    public interface IFileService
    {
        public Task<List<VisitCard>> ReadFileAsync(Stream stream);
    }
}
