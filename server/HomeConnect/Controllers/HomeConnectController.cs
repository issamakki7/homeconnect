using HomeConnect.Commands.AddBid;
using HomeConnect.Commands.AddHouse;
using HomeConnect.Commands.AddUser;
using HomeConnect.Commands.CheckUser;
using HomeConnect.Commands.GetHouse;
using HomeConnect.Commands.GetHousesByUser;
using HomeConnect.Commands.RequestHouseVisit;
using HomeConnect.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HomeConnect.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeConnectController: ControllerBase
    {
        private readonly HomeconnectdbContext _homeconnectContext;
        private readonly IMediator _mediator;

        public HomeConnectController(IMediator mediator, HomeconnectdbContext homeconnectContext)
        {
            _mediator = mediator;
            _homeconnectContext = homeconnectContext;
        }

        [HttpGet]
        [Route("Houses")]
        public async Task<IActionResult> GetHouses()
        {
            return Ok(await _mediator.Send(new GetHousesCommand()));
        }

        [HttpGet]
        [Route("Houses/{userId}")]
        public async Task<IActionResult> GetHousesPerUser([FromRoute] int userId)
        {
            return Ok(await _mediator.Send(new GetHousesByUserCommand()
            {
                userId=userId
            }));
        }


        [HttpPost]
        [Route("VisitRequest/{houseId}")]
        public async Task<IActionResult> AddVisitRequest([FromRoute] int houseId, [FromForm] DateOnly visitDate)
        {
            return Ok(await _mediator.Send(new RequestHouseVisitCommand()
            {
                houseId=houseId,
                visitDate=visitDate
            }));
        }
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> SignUpUser([FromBody] AddUserCommand request)
        {
            return Ok(await _mediator.Send(request));
        }

        [HttpGet]
        [Route("Login")]
        public async Task<IActionResult> LoginUser([FromQuery] string username, [FromQuery] string password)
        {
            return Ok(await _mediator.Send(new CheckUserCommand()
            {
                userName = username,
                password = password
            }));
        }

        [HttpPost]
        [Route("{userId}/House")]
        public async Task<IActionResult> AddHouse([FromRoute] int userId, [FromBody] AddHouseCommand request)
        {
            request.userId = userId;
            return Ok(await _mediator.Send(request));
        }

        [HttpPost]
        [Route("BidHouse/{houseId}")]
        public async Task<IActionResult> BidHouse([FromRoute] int houseId, [FromQuery] int userId, [FromQuery] int biddingPrice)
        {
            return Ok(await _mediator.Send(new AddBidCommand()
            {
                houseId = houseId,
                userId = userId,
                bidPrice= biddingPrice
            }));
        }
    }
}
