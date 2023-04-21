using api_consumer.Api.Reserva.Endpoints;
using api_consumer.Api.Reserva.Helpers;
using api_consumer.Api.Reserva.Repository;
using Microsoft.EntityFrameworkCore;


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

app.MapReservaEndpoints();

//Instancia o Kafka 
KafkaConsumer Consumer = new KafkaConsumer();
CancellationToken token = new();
Consumer.StartAsync(token);

app.Run();
