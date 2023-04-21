using api_consumer.Api.Reserva.Dto;
using api_consumer.Api.Reserva.Entity;
using api_consumer.Api.Reserva.Helpers;
using api_consumer.Api.Reserva.Repository;
using AutoMapper;

namespace api_consumer.Api.Reserva.Endpoints
{
    public static class ReservaEndpoints
    {
        public static void MapReservaEndpoints(this WebApplication app)
        {

            // KafkaConsumer Consumer = new KafkaConsumer();
            // Consumer.ReciveMessage();

            app.MapGet("/", () => "Welcome to Consumer Api!");

            app.MapGet("/v1/reserva", async (IReservaRepo repo, IMapper mapper) =>
            {
                var reservas = await repo.GetAllReservas();

                return Results.Ok(mapper.Map<IEnumerable<ReservaReadDto>>(reservas));
            });

            //Implementar o GetReservaEntityById
            app.MapGet("/v1/reserva/{idCliente}/{idEstacionamento}", async (IReservaRepo repo, IMapper mapper, int idCliente, int idEstacionamento) =>
            {
                var reserva = await repo.GetReservaEntityById(idCliente, idEstacionamento);

                if (reserva != null)
                {
                    return Results.Ok(mapper.Map<ReservaReadDto>(reserva));
                }
                return Results.NotFound();

            });

            app.MapPost("/v1/reserva/{idCliente}/{idEstacionamento}", async (IReservaRepo repo, IMapper mapper, int idCliente, int idEstacionamento, ReservaCreateDto reservaCreateDto) =>
            {
                var reserva = mapper.Map<ReservaEntity>(reservaCreateDto);

                reserva.IdCliente = idCliente;
                reserva.IdEstacionamento = idEstacionamento;

                await repo.CreateReserva(reserva);

                await repo.SaveChanges();

            });

            app.MapPut("/v1/reservas/{idCliente}/{idEstacionamento}", async (IReservaRepo repo, IMapper mapper, int idCliente, int idEstacionamento, ReservaUpdateDto reservaUpdateDto) =>
            {
                var reserva = await repo.GetReservaEntityById(idCliente, idEstacionamento);
                if (reserva == null)
                {
                    return Results.NotFound();
                }

                mapper.Map(reservaUpdateDto, reserva);

                await repo.SaveChanges();

                return Results.NoContent();
            });

            app.MapDelete("/v1/commands/{idCliente}/{idEstacionamento}", async (IReservaRepo repo, IMapper mapper, int idCliente, int idEstacionamento) =>
            {
                var reserva = await repo.GetReservaEntityById(idCliente, idEstacionamento);
                if (reserva == null)
                {
                    return Results.NotFound();
                }

                repo.DeleteReserva(reserva);

                await repo.SaveChanges();

                return Results.NoContent();

            });
        }
    }
}