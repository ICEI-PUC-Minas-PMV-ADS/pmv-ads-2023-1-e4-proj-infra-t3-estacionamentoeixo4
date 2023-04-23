using Microsoft.EntityFrameworkCore;
using Moq;
using api_consumer.Api.Reserva.Entity;
using api_consumer.Api.Reserva.Repository;

namespace Testes
{
    public class TestesUnitarios
    {
        [Fact(DisplayName = "Criação de reserva com sucesso.")]
        public async Task CreateReserva()
        {
            ////Arrange
            //var reserva = new ReservaEntity
            //{
            //    IdCliente = 1,
            //    IdEstacionamento= 1,
            //    Duracao= 1,
            //    HorarioReserva= DateTime.Now,
            //    IdVeiculo= 1,
            //    CanceledAt= null,  
            //};

            //var mockSet = new Mock<DbSet<ReservaEntity>>();
            //mockSet.Setup(m => m.AddAsync(reserva, default)).Returns(Task.CompletedTask);

            //var mockContexto = new Mock<AppDbContext>();
            //mockContexto.Setup(m => m.Set<ReservaEntity>()).Returns(mockSet.Object);

            //var reservaRepo = new ReservaRepo(mockContexto.Object);

            ////Act
            //await reservaRepo.CreateReserva(reserva);

            ////Assert
            //mockSet.Verify(m => m.AddAsync(reserva, default), Times.Once());
            //mockContexto.Verify(m => m.SaveChangesAsync(default), Times.Once());
        }
    }
}