using AutoMapper;

namespace api_Consumer_Testes
{
    public class ReservaEndpointsTests
    {

        [Fact(DisplayName="Criando uma reserva com sucesso.")]
        public void CreateReserva()
        {
            var reserva = Mapper.Map<ReservaEntity>(reservaCreateDto);


        }

        [Fact(DisplayName = "Criando uma reserva com falha.")]
        public void Test1()
        {

        }

        [Fact(DisplayName = "")]
        public void Test1()
        {

        }


    }
}
}