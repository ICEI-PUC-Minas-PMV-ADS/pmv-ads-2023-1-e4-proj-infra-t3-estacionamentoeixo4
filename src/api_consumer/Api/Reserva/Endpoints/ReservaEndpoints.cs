using api_consumer.Api.Reserva.Dto;
using api_consumer.Api.Reserva.Entity;
using api_consumer.Api.Reserva.Repository;
using AutoMapper;

namespace api_consumer.Api.Reserva.Endpoints
{
    public static class ReservaEndpoints
    {
        public static void MapReservaEndpoints(this WebApplication app)
        {
            app.MapGet("/", () => "Welcome to Consumer Api!");

            app.MapGet("/v1/reserva", async (IReservaRepo repo, IMapper mapper) =>
            {
                try
                {
                    var reservas = await repo.GetAllReservas();

                    return Results.Ok(mapper.Map<IEnumerable<ReservaReadDto>>(reservas));
                }
                catch (InvalidOperationException ex)
                {
                    return Results.BadRequest(ex.Message);
                }
                catch (Exception)
                {
                    return Results.StatusCode(500);
                }
                
            });

            //Implementar o GetReservaEntityById
           app.MapGet("/v1/reserva/{idCliente}/{idEstacionamento}", async (IReservaRepo repo, IMapper mapper, int idCliente, int idEstacionamento) =>
           {
               try
               {
                   var reserva = await repo.GetReservaEntityById(idCliente, idEstacionamento);
                   if (reserva != null)
                   {
                       return Results.Ok(mapper.Map<ReservaReadDto>(reserva));
                   }  
                   return Results.NotFound();
                                                          
                                 
               }
               catch (InvalidOperationException ex)
               {
                   return Results.BadRequest(ex.Message);
               }
               catch (Exception)
               {
                   return Results.StatusCode(500);
               }             
           });

            app.MapPost("/v1/reserva/{idCliente}/{idEstacionamento}", async (IReservaRepo repo, IMapper mapper, int idCliente, int idEstacionamento, ReservaCreateDto reservaCreateDto) =>
            {
                try
                {
                    var reserva = mapper.Map<ReservaEntity>(reservaCreateDto);

                    reserva.IdCliente = idCliente;
                    reserva.IdEstacionamento = idEstacionamento;

                    await repo.CreateReserva(reserva);

                    await repo.SaveChanges();

                    return Results.Ok();
                }
                catch (InvalidOperationException ex)
                {
                    return Results.BadRequest(ex.Message);
                }
                catch (Exception)
                {
                    return Results.StatusCode(500);
                }
            });

            app.MapPut("/v1/reservas/{idCliente}/{idEstacionamento}", async (IReservaRepo repo, IMapper mapper, int idCliente, int idEstacionamento, ReservaUpdateDto reservaUpdateDto) => 
            {
                try
                {
                    var reserva = await repo.GetReservaEntityById(idCliente, idEstacionamento);
                    if (reserva != null)
                    {
                        mapper.Map(reservaUpdateDto, reserva);
                        await repo.SaveChanges();
                        return Results.Ok();
                    }
                    return Results.NotFound();
                   
                }
                catch (InvalidOperationException ex)
                {
                    return Results.BadRequest(ex.Message);
                }
                catch (Exception)
                {
                    return Results.StatusCode(500);
                }
            });

            app.MapDelete("/v1/commands/{idCliente}/{idEstacionamento}", async (IReservaRepo repo, IMapper mapper, int idCliente, int idEstacionamento) => 
            {
                try
                {
                    var reserva = await repo.GetReservaEntityById(idCliente, idEstacionamento);
                    if (reserva != null)
                    {
                        repo.DeleteReserva(reserva);
                        await repo.SaveChanges();
                        return Results.Ok();
                    }
                    return Results.NotFound();
                   
                }
                catch (InvalidOperationException ex)
                {
                    return Results.BadRequest(ex.Message);
                }
                catch (Exception)
                {
                    return Results.StatusCode(500);
                }
            });

        }
    }
}