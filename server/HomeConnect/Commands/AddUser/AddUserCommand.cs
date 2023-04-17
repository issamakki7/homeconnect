using MediatR;

namespace HomeConnect.Commands.AddUser
{
    public class AddUserCommand : IRequest<AddUserResponse>
    {
        public string FName { get; set; } = null!;

        public string LName { get; set; } = null!;

        public string Username { get; set; } = null!;

        public string Pass { get; set; } = null!;

        public string Email { get; set; } = null!;
    }
}
