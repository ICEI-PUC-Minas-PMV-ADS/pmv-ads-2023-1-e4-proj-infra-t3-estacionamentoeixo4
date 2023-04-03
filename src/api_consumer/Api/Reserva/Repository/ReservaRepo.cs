using api_consumer.Api.Reserva.Entity;

namespace api_consumer.Api.Reserva.Repository
{
    public class ReservaRepo : IReservaRepo
    {
        private readonly AppDbContext _context;

        private ReservaRepo(AppDbContext context)
        {
            _context = context;
        }

        public async Task CreateReserva(ReservaEntity reserva)
        {
            throw new NotImplementedException();
        }

        public void DeleteReserva(ReservaEntity reserva)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<ReservaEntity>> GetAllReservas()
        {
            throw new NotImplementedException();
        }

        public async Task<ReservaEntity>? GetReservaEntityById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task SaveChanges()
        {
            await _context.SaveChangesAsync();
        }
    }
}