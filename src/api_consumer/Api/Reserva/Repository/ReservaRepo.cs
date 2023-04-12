using api_consumer.Api.Reserva.Entity;
using Microsoft.EntityFrameworkCore;

namespace api_consumer.Api.Reserva.Repository
{
    public class ReservaRepo : IReservaRepo
    {
        private readonly AppDbContext _context;

        public ReservaRepo(AppDbContext context)
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
            return await _context.reserva!.ToListAsync();
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