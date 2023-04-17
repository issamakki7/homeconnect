using System;
using System.Collections.Generic;

namespace HomeConnect.Models;

public partial class Bidding
{
    public int Id { get; set; }

    public int BiddingPrice { get; set; }

    public bool IsAcceptedBid { get; set; }

    public DateTime BiddingDate { get; set; }

    public int UserId { get; set; }

    public int HouseId { get; set; }

    public virtual House House { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
