using HomeConnect.Models;
using MediatR;
using System.Text;
using System.Text.RegularExpressions;
using HomeConnect.Services;

namespace HomeConnect.Commands.AddUser
{
    public class AddUserHandler : IRequestHandler<AddUserCommand, AddUserResponse>
    {
        private readonly HomeconnectdbContext _context;
        private readonly IHashPassword _hashpassword;

        public AddUserHandler(HomeconnectdbContext context, IHashPassword hashpassword)
        {
            _context = context;
            _hashpassword = hashpassword;
        }

        public async Task<AddUserResponse> Handle(AddUserCommand request, CancellationToken cancellationToken)
        {
            if (request.Pass.Length < 5)
            {
                throw new Exception("Password needs to be longer");
            }
            var users = _context.Users;
            var usernamesExisting = users.Select(x=>x.Username).ToList();
            var emailsExisting = users.Select(x=>x.Email).ToList();
            if(usernamesExisting.Contains(request.Username))
            {
                throw new Exception("UserName is already taken, please choose another one");
            }
            if (usernamesExisting.Contains(request.Email))
            {
                throw new Exception("There is already account with this email!");
            }
            if (!IsValidEmail(request.Email)){
                throw new Exception("Email not valid!");

            }
            var hashedPass = _hashpassword.HashPass(request.Pass);
            var newUser = new User
            {
                FName = request.FName,
                Email = request.Email,
                LName = request.LName,
                Username = request.Username,
                Pass = hashedPass
            };
            await _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync(cancellationToken);

            return await Task.FromResult(new AddUserResponse()
            {
                Response = "Done!"
            });
        }

        public static bool IsValidEmail(string email)
        {
            // This regular expression pattern matches most valid email addresses.
            // However, it's not perfect and may let some invalid email addresses slip through.
            string pattern = @"^[^@\s]+@[^@\s]+\.[^@\s]+$";

            // Use Regex.IsMatch method to check if the email matches the pattern.
            return Regex.IsMatch(email, pattern);
        }

    }
}
