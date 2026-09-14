using System.ComponentModel.DataAnnotations;

namespace branding_calculator.Contracts.Generations
{
    public record LayoutRequest(int carriersTypeId, int templateId, string[] outputFormats, Parameters parameters);


    public record Parameters(Contact contact, Design design, QrCodes qrCodes);

    public record Contact(string fio, string position, string phone, string mobile, string email, string address);

    public record Design(int logoId, string colorScheme);

    public record QrCodes(QrCode qr1, QrCode qr2);

    public record QrCode(string label, string url);
}
