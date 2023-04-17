using MediatR;

namespace HomeConnect.Commands.AddHouse
{
    public class AddHouseCommand : IRequest<AddHouseResponse>
    {
        public int userId { get; set; }
        public int Price { get; set; }

        public string Location { get; set; } = null!;

        public int NbOfRooms { get; set; }
    }
}
