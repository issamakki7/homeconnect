using MediatR;

namespace HomeConnect.Commands.GetCurrentUser
{
    public class GetCurrentUserCommand : IRequest<GetCurrentUserResponse>
    {
        public int userId { get; set; }
    }
}
