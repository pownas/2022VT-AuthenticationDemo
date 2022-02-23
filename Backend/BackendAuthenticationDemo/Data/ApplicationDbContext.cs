using BackendAuthenticationDemo.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BackendAuthenticationDemo.Data;

// Adding Identity model customization, that use Guid instead of standard string. 
// More info on Microsoft docs: https://docs.microsoft.com/en-us/aspnet/core/security/authentication/customize-identity-model?view=aspnetcore-6.0#add-user-and-role-navigation-properties
public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, Guid>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public virtual DbSet<ApplicationUser> AspNetUsers { get; set; } = null!;
    public virtual DbSet<ApplicationRole> AspNetRoles { get; set; } = null!;
    public virtual DbSet<ApplicationUserRole> AspNetUserRoles { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        //Passwords for users created below
        var hasher = new PasswordHasher<ApplicationUser>();
        var defaultPassword = "DemoPassword1!";

        //Create Roles
        ApplicationRole roleSystemAdmin = new()
        {
            Name = "SystemAdmin",
            Description = "System admin",
            NormalizedName = "SystemAdmin".ToUpper(),
            Id = Guid.Parse("78945632-24f7-5555-8888-123456075555"),
            ConcurrencyStamp = "314ca2e7-24f7-4f68-bfca-e01ecc070153"
        };

        ApplicationRole roleAdministrator = new()
        {
            Name = "Administrator",
            Description = "Administrator",
            NormalizedName = "Administrator".ToUpper(),
            Id = Guid.Parse("76525372-24f7-5555-8888-876543214321"),
            ConcurrencyStamp = "87654321-24f7-4f68-bfca-d02ecc876543"
        };

        modelBuilder.Entity<ApplicationRole>().HasData(roleSystemAdmin, roleAdministrator);


        //Create Users
        ApplicationUser userSystem = new()
        {
            Id = Guid.Parse("65476588-351e-4b4a-aa3a-b10ab48cdea0"),
            UserName = $"system",
            NormalizedUserName = $"system".ToUpper(),
            Email = "system@mail.com",
            NormalizedEmail = "system@mail.com".ToUpper(),
            ConcurrencyStamp = "bee74495-9134-4dbe-b91d-eb0ce4f85bb2",
            EmailConfirmed = true,
            PasswordHash = hasher.HashPassword(null, defaultPassword),
            GivenName = "System",
            Surname = "Root",
        };

        ApplicationUser user1 = new()
        {
            Id = Guid.Parse("12345678-351e-4b4a-aa3a-123456789012"),
            UserName = $"User1",
            NormalizedUserName = $"User1".ToUpper(),
            Email = "user@mail.com",
            NormalizedEmail = "user@mail.com".ToUpper(),
            ConcurrencyStamp = "bee74495-eeee-dddd-aaaa-aaaabbbbcccc",
            EmailConfirmed = true,
            PasswordHash = hasher.HashPassword(null, defaultPassword),
            GivenName = "Clara",
            Surname = "Carlsson"
        };

        ApplicationUser user2 = new()
        {
            Id = Guid.Parse("98356475-351e-0000-aa3a-122233335643"),
            UserName = $"User2",
            NormalizedUserName = $"User2".ToUpper(),
            Email = "user2@mail.com",
            NormalizedEmail = "user2@mail.com".ToUpper(),
            ConcurrencyStamp = "11112222-eeee-aadw-aaaa-ffffaaaaeeee",
            EmailConfirmed = true,
            PasswordHash = hasher.HashPassword(null, defaultPassword),
            GivenName = "Philip",
            Surname = "Philipsson"
        };

        modelBuilder.Entity<ApplicationUser>().HasData(userSystem, user1, user2);

        //UserRoles
        ApplicationUserRole userRole1 = new()
        {
            RoleId = roleSystemAdmin.Id,
            UserId = userSystem.Id
        };

        ApplicationUserRole userRole2 = new()
        {
            RoleId = roleAdministrator.Id,
            UserId = user1.Id
        };

        modelBuilder.Entity<ApplicationUserRole>().HasData(userRole1, userRole2);
    }
}