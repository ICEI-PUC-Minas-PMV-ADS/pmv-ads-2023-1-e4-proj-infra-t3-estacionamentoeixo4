using Microsoft.EntityFrameworkCore;
using api_consumer.Api.Reserva.Entity;

namespace api_consumer.Api.Reserva.Repository
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<ReservaEntity> reserva { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ReservaEntity>(entity =>
            {
                entity.HasKey(r => new { r.IdCliente, r.IdEstacionamento });
                entity.Property(e => e.IdCliente).HasColumnName("id_cliente").IsRequired();
                entity.Property(e => e.IdEstacionamento).HasColumnName("id_estacionamento").IsRequired();
                entity.Property(e => e.Duracao).HasColumnName("duracao").IsRequired();
                entity.Property(e => e.HorarioReserva).HasColumnName("horario_reserva").HasColumnType("timestamp").IsRequired();
                entity.Property(e => e.IdVeiculo).HasColumnName("id_veiculo").IsRequired();
                entity.Property(e => e.CanceledAt).HasColumnName("canceledAt");
            });

            // Debater cominicação com o outro back-end
            // modelBuilder.Entity<ReservaEntity>()
            //     .HasOne(r => r.Cliente) define a relação com a entidade Cliente
            //     .WithMany(c => c.Reservas) define a propriedade de navegação inversa
            //     .HasForeignKey(r => r.IdCliente); define a chave estrangeira como IdCliente

            // modelBuilder.Entity<ReservaEntity>()
            //     .HasOne(r => r.Estacionamento) define a relação com a entidade Estacionamento
            //     .WithMany(e => e.Reservas) define a propriedade de navegação inversa
            //     .HasForeignKey(r => r.IdEstacionamento); define a chave estrangeira como IdEstacionamento
        }
    }
}