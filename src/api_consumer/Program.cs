using api_consumer.Api.Reserva.Endpoints;
using api_consumer.Api.Reserva.Helpers;
using api_consumer.Api.Reserva.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.SwaggerConfigBuilder();

// Conexão com o banco de dados
string pgsqlConnectionStr = builder.Configuration.GetSection("ConnectionStrings:DefaultConnection")?.Value;
builder.Services.AddDbContextPool<AppDbContext>(options => options.UseNpgsql(pgsqlConnectionStr));

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Api de Estudo v1");
});

app.MapReservaEndpoints();

app.Run();
