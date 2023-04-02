using api_consumer.Api.Reserva.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Conexão com o banco de dados
string mySqlConnectionStr = builder.Configuration.GetSection("ConnectionStrings:DefaultConnection")?.Value;
builder.Services.AddDbContextPool<AppDbContext>(options => options.UseMySql(mySqlConnectionStr, ServerVersion.AutoDetect(mySqlConnectionStr)));

var app = builder.Build();

app.Run();
