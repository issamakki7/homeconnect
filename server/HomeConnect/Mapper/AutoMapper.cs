using AutoMapper;
using HomeConnect.Commands.GetHouse;
using HomeConnect.Commands.GetHousesByUser;
using HomeConnect.Models;

namespace HomeConnect.Mapper
{
    public class AutoMapper : Profile
    {
        public AutoMapper() {
            CreateMap<House, GetHousesResponse>();
            CreateMap<House, GetHousesByUserResponse>()
                .ForMember(x=>x.Id, opt=>opt.MapFrom(src=>src.Id))
                .ForMember(x => x.Price, opt => opt.MapFrom(src => src.Price))
                .ForMember(x => x.Location, opt => opt.MapFrom(src => src.Location))
                .ForMember(x => x.HouseVrlink, opt => opt.MapFrom(src => src.HouseVrlink))
                .ForMember(x => x.NbOfRooms, opt => opt.MapFrom(src => src.NbOfRooms))
                .ForMember(x => x.Bids, opt => opt.MapFrom(src => src.Biddings));

            CreateMap<Bidding, HouseBids>()
                .ForMember(x => x.BidId, opt => opt.MapFrom(src => src.Id))
                .ForMember(x => x.Price, opt => opt.MapFrom(src => src.BiddingPrice))
                .ForMember(x => x.isAcceptedBid, opt => opt.MapFrom(src => src.IsAcceptedBid))
                .ForMember(x => x.UserName, opt => opt.MapFrom(src => src.User.FName+ " "+ src.User.LName));

            CreateMap<Visitrequest, HouseVisits>()
                .ForMember(x => x.HouseVistId, opt => opt.MapFrom(src => src.Id))
                .ForMember(x => x.UserName, opt => opt.MapFrom(src => src.User.FName + " " + src.User.LName))
                .ForMember(x => x.VisitDate, opt => opt.MapFrom(src => src.VisitDate))
                .ForMember(x => x.isAcceptedVisit, opt => opt.MapFrom(src => src.IsAcceptedVisit));

        }
    }
}
