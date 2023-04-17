using MediatR;

namespace HomeConnect.Commands.AddBid
{
    public class AddBidCommand : IRequest<AddBidResponse>
    {
        public int userId { get; set; }
        public int houseId { get; set; }
        public int bidPrice { get; set; }

    }
}
