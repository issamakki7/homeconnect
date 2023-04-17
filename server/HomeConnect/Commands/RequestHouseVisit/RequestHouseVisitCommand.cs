using MediatR;

namespace HomeConnect.Commands.RequestHouseVisit
{
    public class RequestHouseVisitCommand : IRequest<RequestHouseVisitResponse>
    {
        public int userId { get; set; }
        public int houseId { get; set; }
        public DateOnly visitDate { get; set; }
    }
}
