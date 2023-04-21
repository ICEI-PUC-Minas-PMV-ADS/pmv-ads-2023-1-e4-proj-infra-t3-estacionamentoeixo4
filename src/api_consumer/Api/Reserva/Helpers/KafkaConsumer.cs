using Confluent.Kafka;
using Microsoft.Extensions.Hosting;
using System;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using api_consumer.Api.Reserva.Dto;
using api_consumer.Api.Reserva.Entity;
using api_consumer.Api.Reserva.Repository;
using AutoMapper;
using Newtonsoft.Json;

public class KafkaConsumer : BackgroundService
{
    private readonly ConsumerConfig _consumerConfig;
    private readonly ProducerConfig _producerConfig;

    private readonly IReservaRepo _reservaRepo;
    private readonly IMapper _mapper;
    
    public KafkaConsumer()
    {
        _consumerConfig = new ConsumerConfig
        {
            BootstrapServers = "host.docker.internal:9094",
            GroupId = "reserva-consumer-group",
            AutoOffsetReset = AutoOffsetReset.Earliest,
            EnableAutoCommit = false, // desabilita o modo AutoCommit
        };

        _producerConfig = new ProducerConfig
        {

            BootstrapServers = "host.docker.internal:9094"
        };
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
                Console.WriteLine($"Received message: {message.Value} at {message.TopicPartitionOffset}");
                
                Console.WriteLine(">>>>>>>>>>>>> before.reservaModel");

                //ReservaCreateDto reservaModel = JsonConvert.DeserializeObject<ReservaCreateDto>(message.Value);
                
                //Console.WriteLine(">>>>>>>>>>>>> reservaModel.id_veiculo: " + reservaModel.id_veiculo);
                //Console.WriteLine(">>>>>>>>>>>>> reservaModel.id_cliente: " + reservaModel.id_cliente);
                    
                //var reserva = _mapper.Map<ReservaEntity>(reservaModel);

                //await _reservaRepo.CreateReserva(reserva);

                //await _reservaRepo.SaveChanges();


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