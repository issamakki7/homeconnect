using MediatR;

namespace HomeConnect.Commands.GetHouse
{
    public class GetHousesCommand : IRequest<List<GetHousesResponse>>
    {
       public int userId { get; set; }
    }
}
