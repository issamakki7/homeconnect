using HomeConnect.Commands.RequestHouseVisit;
using HomeConnect.Models;
using MediatR;

namespace HomeConnect.Commands.AddBid
{
    public class AddBidHandler : IRequestHandler<AddBidCommand, AddBidResponse>
    {
        private readonly HomeconnectdbContext _context;

        public AddBidHandler(HomeconnectdbContext context)
        {
            _context = context;
        }

        public async Task<AddBidResponse> Handle(AddBidCommand request, CancellationToken cancellationToken)
        {
            var house = _context.Houses.FirstOrDefault(x => x.Id == request.houseId);

            if (house == null)
                throw new Exception("House not found!");
            if (house.UserId == request.userId)
                throw new Exception("Cannot bid on your own house!");
            if (request.bidPrice < house.Price)
                throw new Exception("Bidding Price must be more than the house price posted");

            var bid = new Bidding
            {
                UserId = request.userId,
                HouseId = request.houseId,
                BiddingPrice = request.bidPrice,
                BiddingDate = DateTime.UtcNow,
                IsAcceptedBid =false
            };
            await _context.Biddings.AddAsync(bid, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return await Task.FromResult(new AddBidResponse()
            {
                Response = "Done!"
            });
        }
    }
}
