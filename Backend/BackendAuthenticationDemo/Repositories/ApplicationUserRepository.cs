using BackendAuthenticationDemo.Data;
using BackendAuthenticationDemo.Interfaces;
using BackendAuthenticationDemo.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BackendAuthenticationDemo.Repositories;

public class ApplicationUserRepository : RepositoryBase<ApplicationUser>, IApplicationUserRepository
{
    protected new readonly ApplicationDbContext _dbContext;
    public ApplicationUserRepository(ApplicationDbContext dbContext) : base(dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<ApplicationUser> Login(string username, string password)
    {
        var user = await _dbContext.AspNetUsers.FirstOrDefaultAsync(u => u.UserName.Equals(username));
        if (user == null)
        {
            return new ApplicationUser() { UserName = "User not found" };
        }
        var hasher = new PasswordHasher<ApplicationUser>();

        var passwordHash = hasher.HashPassword(user, password);
        PasswordVerificationResult passwordCheck = hasher.VerifyHashedPassword(user, user.PasswordHash, password);

        if (passwordCheck.HasFlag(PasswordVerificationResult.Success))
            return user;

        if (passwordCheck.HasFlag(PasswordVerificationResult.SuccessRehashNeeded)) // TODO: fix so that RehashNeeded go to User password change...
        {
            return user; //Should return user and "Password change needed", to  get a new Hash (if migrating from old system). 
        }

        return new ApplicationUser() { UserName = "Wrong password" };
    }

    public async Task<ApplicationUser> GetAllUserInfoById(Guid userId)
    {
        var user = await Entities.FindAsync(userId);

        if (user != null)
        {
            user.UserRoles = await _dbContext.AspNetUserRoles.Where(u => u.UserId == user.Id).ToListAsync();
        }

        return user;
    }
}
