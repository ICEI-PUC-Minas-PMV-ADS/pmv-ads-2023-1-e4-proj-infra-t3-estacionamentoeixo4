using System.ComponentModel.DataAnnotations;

namespace api_consumer.Api.Reserva.Dto
{
    public class ReservaUpdateDto
    {
        [Required]
        public int Duracao { get; set; }

        [Required]
        public DateTime HorarioReserva { get; set; }

        [Required]
        public int IdVeiculo { get; set; }
    }
}
