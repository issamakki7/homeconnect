using MediatR;

namespace HomeConnect.Commands.AcceptVisitRequest
{
    public class AcceptVisitRequestCommand : IRequest<AcceptVisitRequestResponse>
    {
        public int visitRequestId { get; set; }
    }
}
