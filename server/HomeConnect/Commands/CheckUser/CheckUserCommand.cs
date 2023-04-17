using MediatR;

namespace HomeConnect.Commands.CheckUser
{
    public class CheckUserCommand : IRequest<CheckUserResponse>
    {
        public string userName { get; set; }
        public string password { get; set; }
    }
}
