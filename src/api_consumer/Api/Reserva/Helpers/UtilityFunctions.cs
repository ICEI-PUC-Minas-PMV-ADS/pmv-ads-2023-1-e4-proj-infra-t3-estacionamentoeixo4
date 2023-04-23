using api_consumer.Api.Reserva.Entity;
using Newtonsoft.Json;

namespace api_consumer.Api.Reserva.Helpers
{
    public class UtilityFunctions
    {
        public static ReservaEntity parseKafkaMessageToReservaDTO(String kafkaMessage)
        {

            ReservaEntity reservaModel = JsonConvert.DeserializeObject<ReservaEntity>(kafkaMessage);
            return reservaModel;
        }
    }
}
