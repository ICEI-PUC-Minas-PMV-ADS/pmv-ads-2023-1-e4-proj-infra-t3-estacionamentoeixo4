using System.ComponentModel.DataAnnotations;

namespace api_consumer.Api.Reserva.Entity
{
    public class ReservaEntity
    {
        [Key]
        public int IdCliente { get; set; }

        [Key]
        public int IdEstacionamento { get; set; }

        [Required]
        public int Duracao { get; set; }

        [Required]
        public DateTime HorarioReserva { get; set; }

        [Required]
        public int IdVeiculo { get; set; }
    }
}