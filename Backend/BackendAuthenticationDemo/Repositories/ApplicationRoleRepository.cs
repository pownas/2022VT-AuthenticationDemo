using BackendAuthenticationDemo.Data;
using BackendAuthenticationDemo.Interfaces;
using BackendAuthenticationDemo.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendAuthenticationDemo.Repositories;

public class ApplicationRoleRepository : RepositoryBase<ApplicationRole>, IApplicationRoleRepository
{
    protected new readonly ApplicationDbContext _dbContext;
    public ApplicationRoleRepository(ApplicationDbContext dbContext) : base(dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<ApplicationRole>> GetRolesForUser(Guid userId)
    {
        var userRoles = await _dbContext.AspNetUserRoles.Where(u => u.UserId == userId).ToListAsync();
        var rolesToReturn = new List<ApplicationRole>();

        foreach (var uo in userRoles)
        {
            var role = await _dbContext.AspNetRoles.Where(u => u.Id == uo.RoleId).ToListAsync();
            if (role != null)
                rolesToReturn.AddRange(role);
        }

        return rolesToReturn;
    }

    public async Task<List<ApplicationUser>> GetRoleUsers(Guid roleId)
    {
        var roleUsers = await _dbContext.AspNetUserRoles.Where(r => r.RoleId == roleId).ToListAsync();
        var usersToReturn = new List<ApplicationUser>();

        foreach (var u in roleUsers)
        {
            var user = await _dbContext.AspNetUsers.FirstOrDefaultAsync(x => x.Id == u.UserId);
            if (user != null)
                usersToReturn.Add(user);
        }

        return usersToReturn;
    }
}