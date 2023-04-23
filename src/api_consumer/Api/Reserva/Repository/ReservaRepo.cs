using System.Data;
using api_consumer.Api.Reserva.Dto;
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
            await _context.SaveChangesAsync();
        }

        public async Task UpdateReserva(ReservaCancellationDto reserva)
        {
            var existingReserva = await _context.reserva.FindAsync(reserva.id_cliente, reserva.id_estacionamento);

            if (existingReserva != null && reserva != null)
            {
                existingReserva.canceledAt = reserva.canceledAt;
                await _context.SaveChangesAsync();
            }
        }

        public void DeleteReserva(ReservaEntity reserva)
        {
            if (reserva == null)
            {
                throw new ArgumentNullException(nameof(reserva));
            }
            _context.reserva.Remove(reserva);
        }

        public async Task<IEnumerable<ReservaEntity>> GetAllReservas()
        {
            return await _context.reserva!.ToListAsync();
        }

        public async Task<ReservaEntity>? GetReservaEntityById(int idCliente, int idEstacionamento)
        {
            return await _context.reserva.FirstOrDefaultAsync(o => o.id_cliente == idCliente && o.id_estacionamento == idEstacionamento);
        }

        public async Task SaveChanges()
        {

            await _context.SaveChangesAsync();
        }

        public async Task CloseDb()
        {
            if (_context.Database.GetDbConnection().State == ConnectionState.Open)
            {
                _context.Database.GetDbConnection().Dispose();
            }
        }
    }
}