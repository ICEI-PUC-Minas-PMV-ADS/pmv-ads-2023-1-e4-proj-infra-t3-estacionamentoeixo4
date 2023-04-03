using api_consumer.Api.Reserva.Repository;
using AutoMapper;

namespace api_consumer.Api.Reserva.Endpoints
{
    public static class ReservaEndpoints
    {
        public static void MapReservaEndpoints(this WebApplication app)
        {
            app.MapGet("/", () => "Welcome to Consumer Api!");

            // Implementar o GetAllReservas
            // app.MapGet("/v1/reserva", async (IReservaRepo repo, IMapper mapper) =>
            // {
            //
            // });

            // Implementar o GetReservaEntityById
            // app.MapGet("/v1/reserva/{id}", async (IReservaRepo repo, IMapper mapper, int id) =>
            // {
            //     
            // });
        }
    }
}