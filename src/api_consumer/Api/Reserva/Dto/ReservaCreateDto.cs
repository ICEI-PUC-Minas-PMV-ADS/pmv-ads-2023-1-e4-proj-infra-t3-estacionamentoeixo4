using System.ComponentModel.DataAnnotations;

namespace api_consumer.Api.Reserva.Dto
{
    public class ReservaCreateDto
    {
        [Required]
        public int Duracao { get; set; }

        [Required]
        public DateTimeOffset HorarioReserva { get; set; } = DateTimeOffset.UtcNow;

        [Required]
        public int IdVeiculo { get; set; }
    }
}