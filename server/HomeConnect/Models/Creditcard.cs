using System;
using System.Collections.Generic;

namespace HomeConnect.Models;

public partial class Creditcard
{
    public int Id { get; set; }

    public string CreditCardNumber { get; set; } = null!;

    public int Cvv { get; set; }

    public string ExpirationDate { get; set; } = null!;

    public int UserId { get; set; }

    public virtual User User { get; set; } = null!;
}
