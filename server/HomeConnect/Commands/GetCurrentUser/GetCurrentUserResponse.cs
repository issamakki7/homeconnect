namespace HomeConnect.Commands.GetCurrentUser
{
    public class GetCurrentUserResponse
    {
        public int Id { get; set; }

        public string FName { get; set; } = null!;

        public string LName { get; set; } = null!;

        public string Username { get; set; } = null!;

        public string Pass { get; set; } = null!;

        public string Email { get; set; } = null!;
    }
}
