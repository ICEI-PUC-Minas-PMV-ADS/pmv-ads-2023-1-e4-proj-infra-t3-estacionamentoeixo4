using api_consumer.Api.Reserva.Dto;
using api_consumer.Api.Reserva.Entity;
using Newtonsoft.Json;

namespace api_consumer.Api.Reserva.Helpers;

public class UtilityFunctions
{
    public static ReservaEntity parseKafkaMessageToReservaDTO(String kafkaMessage)
    {
        Console.WriteLine(">>>>>>>>>>> reservaModel.before: " + kafkaMessage);
        ReservaEntity reservaModel = JsonConvert.DeserializeObject<ReservaEntity>(kafkaMessage);
        
        Console.WriteLine(">>>>>>>>>>> reservaModel: " + reservaModel.id_cliente);
        Console.WriteLine(">>>>>>>>>>> reservaModel: " + reservaModel.id_estacionamento);
        Console.WriteLine(">>>>>>>>>>> reservaModel: " + reservaModel.id_veiculo);
        Console.WriteLine(">>>>>>>>>>> reservaModel: " + reservaModel.horario_reserva);
        Console.WriteLine(">>>>>>>>>>> reservaModel: " + reservaModel.duracao);

        Console.WriteLine(">>>>>>>>>>> reservaModel.horario_reserva: " + reservaModel.horario_reserva.GetType());
        return reservaModel;
    }
}