using HomeConnect.Models;
using MediatR;

namespace HomeConnect.Commands.AddHouse
{
    public class AddHouseHandler : IRequestHandler<AddHouseCommand, AddHouseResponse>
    {
        private readonly HomeconnectdbContext _context;

        public AddHouseHandler(HomeconnectdbContext context)
        {
            _context = context;
        }

        public async Task<AddHouseResponse> Handle(AddHouseCommand request, CancellationToken cancellationToken)
        {
            var newHouse = new House()
            {
                UserId = request.userId,
                Price=request.Price,
                NbOfRooms=request.NbOfRooms,
                Location=request.Location
            };
            await _context.Houses.AddAsync(newHouse);
            await _context.SaveChangesAsync(cancellationToken);

            return await Task.FromResult(new AddHouseResponse()
            {
                Response = "Done!"
            });

        }
    }
}
