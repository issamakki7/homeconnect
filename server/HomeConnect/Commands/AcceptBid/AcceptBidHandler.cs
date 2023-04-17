using HomeConnect.Models;
using MediatR;

namespace HomeConnect.Commands.AcceptBid
{
    public class AcceptBidHandler : IRequestHandler<AcceptBidCommand, AcceptBidResponse>
    {
        private readonly HomeconnectdbContext _context;

        public AcceptBidHandler(HomeconnectdbContext context)
        {
            _context = context;
        }

        public async Task<AcceptBidResponse> Handle(AcceptBidCommand request, CancellationToken cancellationToken)
        {
            var bid = _context.Biddings.FirstOrDefault(x => x.Id == request.bidId);
            if(bid == null)
            {
                throw new Exception("Bid of id {request.bidId} Not Found");
            }
            bid.IsAcceptedBid = true;
            _context.Biddings.Update(bid);
            await _context.SaveChangesAsync();
            return await Task.FromResult(new AcceptBidResponse()
            {
                Response= "Done"
            });
        }
    }
}
