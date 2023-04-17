using System.Text;
using System.Security.Cryptography;


namespace HomeConnect.Services
{
    public class HashPassword : IHashPassword
    {
        public  string HashPass(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                // Convert the password string to a byte array
                byte[] passwordBytes = Encoding.UTF8.GetBytes(password);

                // Compute the hash value of the password bytes
                byte[] hashBytes = sha256.ComputeHash(passwordBytes);

                // Convert the hash value to a string representation
                string hashString = Convert.ToBase64String(hashBytes);

                return hashString;
            }
        }
    }
}
