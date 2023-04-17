using MediatR;

namespace HomeConnect.Commands.AcceptBid
{
    public class AcceptBidCommand : IRequest<AcceptBidResponse>
    {
        public int bidId { get; set; }
    }
}
