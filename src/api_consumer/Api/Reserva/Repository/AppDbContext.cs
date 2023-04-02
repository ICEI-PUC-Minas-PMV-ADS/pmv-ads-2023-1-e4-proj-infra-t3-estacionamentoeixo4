using Microsoft.EntityFrameworkCore;
using api_consumer.Api.Reserva.Entity;

namespace api_consumer.Api.Reserva.Repository
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<ReservaEntity> Reservas => Set<ReservaEntity>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // TODO - Estudar como definir tipos 
            modelBuilder.Entity<ReservaEntity>(entity =>
            {
                entity.HasKey(e => e.IdCliente).HasName("id_cliente");
                entity.HasKey(e => e.IdEstacionamento).HasName("id_estacionamento");
                entity.Property(e => e.Duracao).HasColumnName("duracao").IsRequired();
                entity.Property(e => e.HorarioReserva).HasColumnName("horario_reserva").IsRequired();
                entity.Property(e => e.IdVeiculo).HasColumnName("id_veiculo").IsRequired();
            });
        }
    }
}