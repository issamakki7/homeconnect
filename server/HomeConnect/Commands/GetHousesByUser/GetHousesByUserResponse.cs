namespace HomeConnect.Commands.GetHousesByUser
{
    public class GetHousesByUserResponse
    {
        public int Id { get; set; }
        public int Price { get; set; }

        public string? Location { get; set; }

        public int NbOfRooms { get; set; }

        public string? HouseVrlink { get; set; }

        public bool VRVisitRequested { get; set; }

        public List<HouseBids> Bids { get; set; }
        public List<HouseVisits> Visits { get; set; }

    }
    public class HouseBids
    {
        public int BidId { get; set; }
        public int Price { get; set; }
        public string UserName { get; set; }
        public bool isAcceptedBid { get; set; }
    }
    public class HouseVisits
    {
        public int HouseVistId { get; set; }
        public string UserName { get; set; }
        public DateTime VisitDate { get; set; }
        public bool isAcceptedVisit { get; set; }


    }
}
