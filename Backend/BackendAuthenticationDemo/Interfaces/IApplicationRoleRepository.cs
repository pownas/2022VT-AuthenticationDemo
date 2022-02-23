using BackendAuthenticationDemo.Models;

namespace BackendAuthenticationDemo.Interfaces;

public interface IApplicationRoleRepository : IRepositoryBase<ApplicationRole>
{
    public Task<List<ApplicationRole>> GetRolesForUser(Guid userId);

    public Task<List<ApplicationUser>> GetRoleUsers(Guid roleId);
}
