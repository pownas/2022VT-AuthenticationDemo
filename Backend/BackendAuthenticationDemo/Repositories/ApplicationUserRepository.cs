using BackendAuthenticationDemo.Data;
using BackendAuthenticationDemo.Dtos;
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

    public async Task<ApplicationUser> Login(LoginDto dto)
    {
        var user = await _dbContext.AspNetUsers.FirstOrDefaultAsync(u => u.UserName.Equals(dto.UserName));
        if (user == null)
            return new ApplicationUser() { UserName = "User not found" };

        var hasher = new PasswordHasher<ApplicationUser>();
        var passwordHash = hasher.HashPassword(user, dto.Password);
        PasswordVerificationResult passwordCheck = hasher.VerifyHashedPassword(user, user.PasswordHash, dto.Password);

        if (passwordCheck.HasFlag(PasswordVerificationResult.Success))
            return user;

        if (passwordCheck.HasFlag(PasswordVerificationResult.SuccessRehashNeeded)) // TODO: fix so that RehashNeeded go to User password change...
            return user; //Should return user and "Password change needed", to  get a new Hash (if migrating from old system). 

        return new ApplicationUser() { UserName = "Wrong password" };
    }

    public async Task<ApplicationUser> GetAllUserInfoById(Guid userId)
    {
        var user = await Entities.FindAsync(userId);
        if (user != null)
        {
            user.UserRoles = await _dbContext.AspNetUserRoles.Where(u => u.UserId == user.Id).ToListAsync();
            foreach (var userRole in user.UserRoles)
            {
                var role = await _dbContext.Roles.FirstOrDefaultAsync(r => r.Id == userRole.RoleId);
                if (role != null)
                    user.Roles.Add(role);
            }
        }

        return user;
    }
}
