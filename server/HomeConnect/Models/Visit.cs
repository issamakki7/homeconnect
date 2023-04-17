using System;
using System.Collections.Generic;

namespace HomeConnect.Models;

public partial class Visit
{
    public int Id { get; set; }

    public string VisitType { get; set; } = null!;

    public virtual ICollection<Visitrequest> Visitrequests { get; } = new List<Visitrequest>();
}
