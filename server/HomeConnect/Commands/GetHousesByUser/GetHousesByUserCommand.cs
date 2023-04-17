using MediatR;

namespace HomeConnect.Commands.GetHousesByUser
{
    public class GetHousesByUserCommand : IRequest<List<GetHousesByUserResponse>>
    {
        public int userId { get; set; }
    }
}
