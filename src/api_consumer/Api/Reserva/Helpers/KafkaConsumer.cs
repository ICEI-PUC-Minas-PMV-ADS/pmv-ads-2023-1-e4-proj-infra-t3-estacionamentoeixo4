// using Confluent.Kafka;
// using Serilog;
// using System;
// using System.Collections.Generic;
// using System.Text;
// using System;

// namespace Application.Services
// {
//     public class KafkaConsumer
//     {
//         public const String HOST = "127.0.0.1:9094";
//         public const String KAFKA_TOPIC_NAME = "reservar";
//         public const String CONSUMER_GROUP_ID = "reserva-consumer-group";

//         public void ReciveMessage()
//         {

//             var config = new ConsumerConfig
//             {
//                 BootstrapServers = "host.docker.internal:9094",
//                 GroupId = "reservar-group",
//                 AutoOffsetReset = AutoOffsetReset.Earliest,
//                 EnableAutoCommit = false, // desabilita o modo AutoCommit
//             };

//             using (var consumer = new ConsumerBuilder<Ignore, string>(config).Build())
//             {
//                 consumer.Subscribe("reservar");
//                 try
//                 {
//                     while (true)
//                     {
//                         var message = consumer.Consume();

//                         Console.WriteLine($"Received message: {message.Value} at {message.TopicPartitionOffset}");


//                         // processa a mensagem aqui...
//                         consumer.Commit(message); // confirma a mensagem processada
//                     }
//                 }
//                 catch (OperationCanceledException)
//                 {
//                     Console.WriteLine("Closing consumer.");
//                     consumer.Close();
//                 }
//             }
//         }
//     }
// }

using Confluent.Kafka;
using Microsoft.Extensions.Hosting;
using System;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

public class KafkaConsumer : BackgroundService
{
    private readonly ConsumerConfig _consumerConfig;
    private readonly ProducerConfig _producerConfig;

    public KafkaConsumer()
    {
        _consumerConfig = new ConsumerConfig
        {
            BootstrapServers = "host.docker.internal:9094",
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

                // Processa a mensagem e envia a resposta para um tópico de resposta
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