using System;
using System.Collections.Generic;

namespace HomeConnect.Models;

public partial class House
{
    public int Id { get; set; }

    public int Price { get; set; }

    public string Location { get; set; } = null!;

    public int NbOfRooms { get; set; }

    public string? HouseVrlink { get; set; }

    public int UserId { get; set; }

    public virtual ICollection<Bidding> Biddings { get; } = new List<Bidding>();

    public virtual User User { get; set; } = null!;

    public virtual ICollection<Visitrequest> Visitrequests { get; } = new List<Visitrequest>();
}
