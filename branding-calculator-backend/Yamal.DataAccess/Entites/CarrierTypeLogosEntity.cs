using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Yamal.DataAccess.Entites;

public class CarrierTypeLogosEntity
{
    public  CarrierTypeLogosEntity()
    {}

    public CarrierTypeLogosEntity(int id, int carrierTypeId,
        int logoId, bool isRecommended)
    {
        Id = id;
        CarrierTypeId = carrierTypeId;
        LogoId = logoId;
        IsRecommended = isRecommended;
    }
    
    public int Id { get; set; }
    [Column("carrier_type_id")]
    public int CarrierTypeId { get; set; }
    [Column("logo_id")]
    public int LogoId { get; set; }
    [Column("is_recommended")]
    public bool IsRecommended { get; set; }
    
    public MediaTypesEntity MediaType { get; set; }
    
    public LogoLibraryEntity LogoLibrary { get; set; }
    
    
    // узнать про связи в проекте
    // дописать сущность CarrierTypeLogo
    // отдыхать
}