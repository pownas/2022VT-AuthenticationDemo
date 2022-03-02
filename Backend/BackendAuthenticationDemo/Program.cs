using BackendAuthenticationDemo.Data;
using BackendAuthenticationDemo.Interfaces;
using BackendAuthenticationDemo.Models;
using BackendAuthenticationDemo.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("AppDbContext");

#region Add Config for Services: DbContext, Identity, UnitOfWork, Cors, Controllers and Swagger.
builder.Services.AddDbContext<ApplicationDbContext>(opt =>
{
    opt.UseSqlServer(connectionString);
});

builder.Services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

builder.Services.AddCors();

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(opt =>
{
    opt.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Type = SecuritySchemeType.Http,
        Scheme = JwtBearerDefaults.AuthenticationScheme.ToLowerInvariant(),
        In = ParameterLocation.Header,
        Name = "Authorization",
        BearerFormat = "JWT",
        Description = "JWT authorization header using the bearer scheme: \"{token}\""
    });
    opt.OperationFilter<SecurityRequirementsOperationFilter>();
});
#endregion

builder.Services.AddAuthentication(cfg => {
    cfg.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    cfg.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    cfg.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(opt => {
    var systemSecretKey = builder.Configuration.GetSection("AppSettings:SystemSecretKey").Value;
    opt.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(systemSecretKey)),
        ValidateIssuer = false,
        ValidateAudience = false,
        RequireExpirationTime = false,
        ValidateLifetime = true,
        ClockSkew = TimeSpan.Zero
    };
    opt.SaveToken = true;
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();

app.UseCors(opt =>
    opt.WithOrigins(new[] {
        "http://localhost:8000", //React Frontend
        "https://localhost:7016" //Swagger UI
    }).AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials()
);

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();