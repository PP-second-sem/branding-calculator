
namespace branding_calculator.Contracts.Layouts
{
    public class LayoutSaveRequest
    {
        /// <summary>
        /// ID типа носителя (FK → CarrierTypes.id)
        /// </summary>
        public int CarrierTypeId { get; set; }

        /// <summary>
        /// JSON с параметрами генерации (сохраняется как есть, без валидации)
        /// </summary>
        public string? JsonContent { get; set; }

        /// <summary>
        /// Файлы для упаковки в ZIP
        /// </summary>
        public List<IFormFile> Files { get; set; } = new();
    }
}
