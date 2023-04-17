using HomeConnect.Models;
using MediatR;

namespace HomeConnect.Commands.AcceptVisitRequest
{
    public class AcceptVisitRequestHandler : IRequestHandler<AcceptVisitRequestCommand, AcceptVisitRequestResponse>
    {
        private readonly HomeconnectdbContext _context;

        public AcceptVisitRequestHandler(HomeconnectdbContext context)
        {
            _context = context;
        }

        public async Task<AcceptVisitRequestResponse> Handle(AcceptVisitRequestCommand request, CancellationToken cancellationToken)
        {
            var visit = _context.Visitrequests.FirstOrDefault(x => x.Id == request.visitRequestId);
            if (visit == null) { throw new Exception("Visit of Id {request.visitRequestId} was not found!"); }

            visit.IsAcceptedVisit = true;
            _context.Visitrequests.Update(visit);
            await _context.SaveChangesAsync(cancellationToken);

            return await Task.FromResult(new AcceptVisitRequestResponse()
            {
                Response = "Done!"
            });

        }
    }
}
