using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;
using System.Data;
using System.Xml.Schema;
using Yamal.Core.Abstractions;


namespace branding_calculator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MultiAddController : Controller
    {
        private readonly IFileService _fileService;

        public MultiAddController(IFileService fileService)
        {
            _fileService = fileService;
        }


        [HttpPost("/file/parsing")]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult> ParsingContext(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            var supportedExtensions = new HashSet<string>() {".xlsx", ".xlsb", ".xls", ".csv" };

            if (!supportedExtensions.Contains(Path.GetExtension(file.FileName)))
            {
                return BadRequest("Invalid file type.");
            }

            using (var f = file.OpenReadStream())
            {
                if (f == null)
                {
                    return BadRequest("File stream is null.");
                }

                return Ok (await _fileService.ReadFileAsync(f));
            }

        }
    }
}
