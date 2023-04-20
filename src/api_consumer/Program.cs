using api_consumer.Api.Reserva.Endpoints;
using api_consumer.Api.Reserva.Helpers;
using api_consumer.Api.Reserva.Repository;
using Microsoft.EntityFrameworkCore;
using Confluent.Kafka;
using Newtonsoft.Json;
using api_consumer.Api.Reserva.Dto;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

builder.SwaggerConfigBuilder();

// Conexão com o banco de dados
string pgsqlConnectionStr = builder.Configuration.GetSection("ConnectionStrings:DefaultConnection")?.Value;
builder.Services.AddDbContextPool<AppDbContext>(options => options.UseNpgsql(pgsqlConnectionStr));
builder.Services.AddScoped<IReservaRepo, ReservaRepo>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Api de Estudo v1");
});

// app.MapReservaEndpoints();

KafkaConsumer Consumer = new KafkaConsumer();

Consumer.ReciveMessage();

app.Run();

// var config = new ConsumerConfig
// {
//     GroupId = "reserva",
//     BootstrapServers = "localhost:9094",
//     AutoOffsetReset = AutoOffsetReset.Earliest
// };

// using (var consumer = new ConsumerBuilder<Null, string>(config).Build())
// {
//     var topic = "reservar";
//     consumer.Subscribe(topic);

//     CancellationTokenSource token = new();

//     while (true)
//     {
//         var consumeResult = consumer.Consume(token.Token);

//         if (consumeResult != null)
//         {
//             var mensagem = consumeResult.Message.Value;

//             // Trate a mensagem do Kafka aqui
//             // Por exemplo, crie uma nova reserva no banco de dados

//             var reserva = JsonConvert.DeserializeObject<ReservaCreateDto>(mensagem);
//             Console.WriteLine(">>>> reserva: ", reserva);
//             // await repo.CreateReserva(reserva);
//             // await repo.SaveChanges();
//         }

//         await Task.Delay(1000, token.Token);
//     }
// }