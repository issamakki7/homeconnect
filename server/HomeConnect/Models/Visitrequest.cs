using System;
using System.Collections.Generic;

namespace HomeConnect.Models;

public partial class Visitrequest
{
    public int Id { get; set; }

    public bool IsAcceptedVisit { get; set; }

    public DateOnly VisitDate { get; set; }

    public int UserId { get; set; }

    public int HouseId { get; set; }

    public int VisitId { get; set; }

    public virtual House House { get; set; } = null!;

    public virtual User User { get; set; } = null!;

    public virtual Visit Visit { get; set; } = null!;
}
