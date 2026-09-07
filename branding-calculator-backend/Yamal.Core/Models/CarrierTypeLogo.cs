namespace Yamal.Core.Models;

public class CarrierTypeLogo
{
    public CarrierTypeLogo(int id, int carrierTypeId, int logoId, bool isRecommended)
    {
        Id = id;
        CarrierTypeId = carrierTypeId;
        LogoId = logoId;
        IsRecommended = isRecommended;
    }
    
    public int Id { get; set; }
    public int CarrierTypeId { get; set; }
    public int LogoId { get; set; }
    public bool IsRecommended { get; set; }
}