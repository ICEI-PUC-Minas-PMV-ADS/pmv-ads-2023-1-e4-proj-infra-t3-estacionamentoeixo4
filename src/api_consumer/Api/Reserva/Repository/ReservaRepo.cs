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
            if (reserva == null)
            {
                throw new ArgumentNullException(nameof(reserva));
            }

            await _context.AddAsync(reserva);
        }

        public void DeleteReserva(ReservaEntity reserva)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<ReservaEntity>> GetAllReservas()
        {
            return await _context.reserva!.ToListAsync();
        }

        public async Task<ReservaEntity>? GetReservaEntityById(int idCliente, int idEstacionamento)
        {
            return await _context.reserva.FirstOrDefaultAsync(o => o.IdCliente == idCliente && o.IdEstacionamento == idEstacionamento);
        }

        public async Task SaveChanges()
        {
            await _context.SaveChangesAsync();
        }
    }
}