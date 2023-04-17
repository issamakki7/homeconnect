using HomeConnect.Models;
using MediatR;
using System.Text;
using System.Security.Cryptography;
using HomeConnect.Services;

namespace HomeConnect.Commands.CheckUser
{
    public class CheckUserHandler : IRequestHandler<CheckUserCommand, CheckUserResponse>
    {
        private readonly HomeconnectdbContext _context;
        private readonly IHashPassword _hashpassword;

        public CheckUserHandler(HomeconnectdbContext context, IHashPassword hashPassword)
        {
            _context = context;
            _hashpassword = hashPassword;
        }

        public Task<CheckUserResponse> Handle(CheckUserCommand request, CancellationToken cancellationToken)
        {
            var hashedPass = _hashpassword.HashPass(request.password);
            var user = _context.Users.FirstOrDefault(x => x.Username.Equals(request.userName)
            && x.Pass.Equals(hashedPass));
            if (user == null)
            {
                throw new Exception("Incorrect Username or Password. Please enter again");
            }
            return Task.FromResult(new CheckUserResponse
            {
                isFoundUser=true
            });
        }

    }
}
