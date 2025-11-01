using Backend.Data;
using DotNetEnv;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

Env.Load();

// Read connection string from environment variable
var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");

// Register DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));


var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/judete", async (AppDbContext db) =>
    await db.Judete.ToListAsync());

app.Run();