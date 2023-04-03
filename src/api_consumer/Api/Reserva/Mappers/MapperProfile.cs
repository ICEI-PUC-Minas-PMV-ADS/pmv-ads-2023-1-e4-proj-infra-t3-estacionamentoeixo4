using api_consumer.Api.Reserva.Dto;
using api_consumer.Api.Reserva.Entity;
using AutoMapper;

namespace api_consumer.Api.Reserva.Mappers
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<ReservaEntity, ReservaReadDto>().ReverseMap();
            CreateMap<ReservaCreateDto, ReservaEntity>().ReverseMap();
            CreateMap<ReservaUpdateDto, ReservaEntity>().ReverseMap();
        }
    }
}