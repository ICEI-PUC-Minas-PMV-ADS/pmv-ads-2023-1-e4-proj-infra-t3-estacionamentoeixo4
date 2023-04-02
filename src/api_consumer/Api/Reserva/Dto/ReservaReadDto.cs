using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api_consumer.Api.Reserva.Dto
{
    public class ReservaReadDto
    {
        public int IdCliente { get; set; }

        public int IdEstacionamento { get; set; }

        public int Duracao { get; set; }

        public DateTimeOffset HorarioReserva { get; set; } = DateTimeOffset.UtcNow;

        public int IdVeiculo { get; set; }
    }
}