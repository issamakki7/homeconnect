namespace HomeConnect.Commands.GetHouse
{
    public class GetHousesResponse
    {
        public int Id { get; set; }

        public int Price { get; set; }

        public string Location { get; set; }

        public int NbOfRooms { get; set; }

        public string? HouseVrlink { get; set; }

        public string  HouseOwner { get; set; } 

    }
}
