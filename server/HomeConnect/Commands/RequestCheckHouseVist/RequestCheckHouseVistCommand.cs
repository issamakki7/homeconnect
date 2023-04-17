using MediatR;

namespace HomeConnect.Commands.RequestCheckHouseVist
{
    public class RequestCheckHouseVistCommand : IRequest<RequestCheckHouseVistResponse>
    {
        public int userId { get; set; }
        public int houseId { get; set; }
        public DateOnly visitDate { get; set; }
    }
}
