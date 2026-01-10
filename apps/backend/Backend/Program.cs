using System.Text;
using Backend.Data;
using Backend.Endpoints;
using DotNetEnv;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

Env.Load();

var JwtSecret = Environment.GetEnvironmentVariable("JWT_SECRET");
if (string.IsNullOrEmpty(JwtSecret))
    throw new Exception("Jwt nu este in env");

// Read connection string from environment variable
var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");

// Register DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JwtSecret))
        };
    });

builder.Services.AddAuthorization();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.SetIsOriginAllowed(origin => true) // Permite orice origin (mai sigur pt dev)
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials(); // Adaugă asta dacă vei folosi cookies/auth tokens în viitor
        });
});

var app = builder.Build();

app.UseCors("AllowReactApp");

app.UseAuthentication();
app.UseAuthorization();

app.MapGet("/", () => "Hello World!");

app.MapAuthEndpoints();
app.MapFavEndpoints();
app.MapMeseriasEndpoints();
app.Run();