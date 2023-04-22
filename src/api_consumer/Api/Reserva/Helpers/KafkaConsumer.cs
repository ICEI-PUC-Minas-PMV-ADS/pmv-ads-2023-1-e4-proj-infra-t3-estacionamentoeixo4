using api_consumer.Api.Reserva.Entity;
using Confluent.Kafka;
using api_consumer.Api.Reserva.Repository;
using api_consumer.Api.Reserva.Helpers;
using AutoMapper;
using Microsoft.VisualBasic.CompilerServices;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Utils = Microsoft.VisualBasic.CompilerServices.Utils;

public class KafkaConsumer : BackgroundService
{
    private readonly ConsumerConfig _consumerConfig;
    private readonly ProducerConfig _producerConfig;

    private readonly IReservaRepo _iReservaRepo;
    private readonly ReservaRepo _reservaRepo;
    private readonly IMapper _mapper;   
    
    public KafkaConsumer(AppDbContext dbContext)
    {
        _consumerConfig = new ConsumerConfig
        {
            BootstrapServers = "host.docker.internal:9094",
            GroupId = "reserva-consumer-group",
            AutoOffsetReset = AutoOffsetReset.Earliest,
            EnableAutoCommit = true, // desabilita o modo AutoCommit
        };

        _producerConfig = new ProducerConfig
        {

            BootstrapServers = "host.docker.internal:9094"
        };

        _reservaRepo = new ReservaRepo(dbContext);
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        using var consumer = new ConsumerBuilder<Ignore, string>(_consumerConfig).Build();
        consumer.Subscribe("reservar_vaga");

        using var producer = new ProducerBuilder<string, string>(_producerConfig).Build();
        while (true)
        {
            try
            {
                var message = consumer.Consume(stoppingToken);
                var kafkaJson = JObject.Parse(message.Value);
                
                Console.WriteLine($"Received message: {kafkaJson} at {message.TopicPartitionOffset}");

                try
                {
                    ReservaEntity reserva = UtilityFunctions.parseKafkaMessageToReservaDTO(kafkaJson["data"].ToString());
                    Console.WriteLine(">>>>>>>>>> reserva: " + reserva.ToString());
                    
                    await _reservaRepo.CreateReserva(reserva);
                    await _reservaRepo.SaveChanges();
                }
                catch (Exception e)
                {
                    Console.WriteLine(">>>>>>>>>>> error: " + e);
                    throw;
                }
                

                // // Processa a mensagem e envia a resposta para um tópico de resposta
                var response = $"Response to message {message.Value}";
                var responseTopic = new TopicPartition("reservar_vaga.reply", message.TopicPartition.Partition);
                var responseMessage = new Message<string, string>
                {
                    Key = "reserva",
                    Value = response
                };
                await producer.ProduceAsync(responseTopic, responseMessage);
                // Confirma a mensagem
                consumer.Commit(message);
            }
            catch (ConsumeException ex)
            {
                Console.WriteLine($"Error while consuming from Kafka: {ex.Error.Reason}");
            }
        }
    }
}