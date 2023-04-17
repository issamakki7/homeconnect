using HomeConnect.Commands.RequestHouseVisit;
using HomeConnect.Controllers;
using HomeConnect.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HomeConnect.Commands.RequestCheckHouseVist
{
    public class RequestCheckHouseVistHandler : IRequestHandler<RequestCheckHouseVistCommand, RequestCheckHouseVistResponse>
    {
        private readonly HomeconnectdbContext _context;

        public RequestCheckHouseVistHandler(HomeconnectdbContext context)
        {
            _context = context;
        }

        public async Task<RequestCheckHouseVistResponse> Handle(RequestCheckHouseVistCommand request, CancellationToken cancellationToken)
        {
            var visitTypeId = _context.Visits.FirstOrDefault(x => x.VisitType == "Check_House")!.Id;
            var visitHouseRequest = new Visitrequest
            {
                UserId = request.userId,
                VisitDate = request.visitDate,
                HouseId = request.houseId,
                VisitId = visitTypeId,
                IsAcceptedVisit = false
            };
            await _context.Visitrequests.AddAsync(visitHouseRequest);
            await _context.SaveChangesAsync();
            return await Task.FromResult(new RequestCheckHouseVistResponse()
            {
                Response = "Done!"
            });
        }
    }
}
