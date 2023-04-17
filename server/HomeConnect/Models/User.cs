using System;
using System.Collections.Generic;

namespace HomeConnect.Models;

public partial class User
{
    public int Id { get; set; }

    public string FName { get; set; } = null!;

    public string LName { get; set; } = null!;

    public string Username { get; set; } = null!;

    public string Pass { get; set; } = null!;

    public string Email { get; set; } = null!;

    public virtual ICollection<Bidding> Biddings { get; } = new List<Bidding>();

    public virtual ICollection<Creditcard> Creditcards { get; } = new List<Creditcard>();

    public virtual ICollection<House> Houses { get; } = new List<House>();

    public virtual ICollection<Visitrequest> Visitrequests { get; } = new List<Visitrequest>();
}
