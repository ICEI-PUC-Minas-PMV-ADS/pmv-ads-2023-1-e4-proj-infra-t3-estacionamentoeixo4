using api_consumer.Api.Reserva.Dto;
using api_consumer.Api.Reserva.Repository;
using AutoMapper;
using Confluent.Kafka;
using Newtonsoft.Json;
using Serilog;

namespace api_consumer.Api.Reserva.Helpers
{
    public class KafkaConsumer
    {
        public const String HOST = "localhost:9094";
        public const String KAFKA_TOPIC_NAME = "reservar";
        public const String CONSUMER_GROUP_ID = "reserva";

        public void ReciveMessage()
        {
            Console.WriteLine("Waiting...");

            var logger = new LoggerConfiguration()
           .WriteTo.Console()
           .CreateLogger();
            logger.Information("Testando o consumo de mensagens com Kafka");


            ConsumerConfig conf = new ConsumerConfig
            {
                GroupId = CONSUMER_GROUP_ID,
                BootstrapServers = HOST,
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            using var Consumer = new ConsumerBuilder<Ignore, string>(conf).Build();
            {

                Consumer.Subscribe(KAFKA_TOPIC_NAME);

                CancellationTokenSource Cts = new();
                Console.CancelKeyPress += (_, e) =>
                {
                    e.Cancel = true;
                    Cts.Cancel();
                };

                try
                {
                    while (true)
                    {
                        Console.WriteLine("while...");
                        try
                        {
                            Console.WriteLine("before...");
                            var Message = Consumer.Consume(Cts.Token);
                            var test = Message.Message.Value;
                            Console.WriteLine("test: ", test);

                            Log.Logger.Information($"Received message '{Message.Value}' from: '{Message.TopicPartitionOffset}'");
                        }
                        catch (ConsumeException e)
                        {
                            Log.Logger.Error($"Error occured: {e.Error.Reason}");
                        }
                    }
                }
                catch (OperationCanceledException)
                {
                    Consumer.Close();
                }
            }
        }
    }
}