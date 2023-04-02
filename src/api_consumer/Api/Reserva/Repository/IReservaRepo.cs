using api_consumer.Api.Reserva.Entity;

namespace api_consumer.Api.Reserva.Repository
{
    public interface IReservaRepo
    {
        Task SaveChanges();
        Task<ReservaEntity>? GetReservaEntityById(int id);
        Task<IEnumerable<ReservaEntity>> GetAllReservas();
        Task CreateReserva(ReservaEntity reserva);

        void DeleteReserva(ReservaEntity reserva);
    }
}