using AutoMapper;
using HomeConnect.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HomeConnect.Commands.GetHouse
{
    public class GetHousesHandler : IRequestHandler<GetHousesCommand, List<GetHousesResponse>>
    {
        private readonly HomeconnectdbContext _context;
        private readonly IMapper _mapper;

        public GetHousesHandler(HomeconnectdbContext homeconnectdbContext, IMapper mapper)
        {
            _context = homeconnectdbContext;
            _mapper= mapper;
        }

        public Task<List<GetHousesResponse>> Handle(GetHousesCommand request, CancellationToken cancellationToken)
        {
            var houses = _context.Biddings
                .Include(x=>x.House)
                .Where(x => x.IsAcceptedBid.Equals(false) && x.House.UserId!= request.userId)
                .Select(x=>x.House)
                .ToList();

            return Task.FromResult(_mapper.Map<List<GetHousesResponse>>(houses));
        }
    }
}
