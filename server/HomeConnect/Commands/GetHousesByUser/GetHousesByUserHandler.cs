using AutoMapper;
using HomeConnect.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HomeConnect.Commands.GetHousesByUser
{
    public class GetHousesByUserHandler : IRequestHandler<GetHousesByUserCommand, List<GetHousesByUserResponse>>
    {
        private readonly HomeconnectdbContext _context;
        private readonly IMapper _mapper;

        public GetHousesByUserHandler(HomeconnectdbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<GetHousesByUserResponse>> Handle(GetHousesByUserCommand request, CancellationToken cancellationToken)
        {
            var userHouses = _context.Houses
                .Include(x=>x.Biddings)
                .Include(x => x.User)
                .Include(x=>x.Visitrequests)
                .Include(x=>x.User)
                .Where(x => x.UserId == request.userId).ToList();

            return Task.FromResult(_mapper.Map<List<GetHousesByUserResponse>>(userHouses));
                
        }
    }
}
