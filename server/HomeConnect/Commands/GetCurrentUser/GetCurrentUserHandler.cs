using AutoMapper;
using HomeConnect.Models;
using MediatR;

namespace HomeConnect.Commands.GetCurrentUser
{
    public class GetCurrentUserHandler : IRequestHandler<GetCurrentUserCommand, GetCurrentUserResponse>
    {
        private readonly HomeconnectdbContext _context;
        private readonly IMapper _mapper;

        public GetCurrentUserHandler(HomeconnectdbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;

        }

        public Task<GetCurrentUserResponse> Handle(GetCurrentUserCommand request, CancellationToken cancellationToken)
        {
            var user = _context.Users.FirstOrDefault(x=>x.Id.Equals(request.userId));
            return Task.FromResult(_mapper.Map<GetCurrentUserResponse>(user));
        }
    }
}
