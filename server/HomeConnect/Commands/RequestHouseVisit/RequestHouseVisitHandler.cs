using AutoMapper;
using HomeConnect.Models;
using MediatR;

namespace HomeConnect.Commands.RequestHouseVisit
{
    public class RequestHouseVisitHandler : IRequestHandler<RequestHouseVisitCommand, RequestHouseVisitResponse>
    {
        private readonly HomeconnectdbContext _context;

        public RequestHouseVisitHandler(HomeconnectdbContext context)
        {
            _context = context;
        }

        public async Task<RequestHouseVisitResponse> Handle(RequestHouseVisitCommand request, CancellationToken cancellationToken)
        {
            var visitTypeId = _context.Visits.FirstOrDefault(x => x.VisitType == "VR")!.Id;
            var visitHouseRequest = new Visitrequest
            {
                UserId=request.userId,
                VisitDate =request.visitDate,
                HouseId=request.houseId,
                VisitId = visitTypeId,
                IsAcceptedVisit=false
            };
            await _context.Visitrequests.AddAsync(visitHouseRequest);
            await _context.SaveChangesAsync();
            return await Task.FromResult( new RequestHouseVisitResponse()
            {
                Response="Done!"
            });
        }
    }
}
