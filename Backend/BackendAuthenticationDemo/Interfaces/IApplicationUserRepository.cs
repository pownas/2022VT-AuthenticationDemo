using BackendAuthenticationDemo.Models;

namespace BackendAuthenticationDemo.Interfaces;

public interface IApplicationUserRepository : IRepositoryBase<ApplicationUser>
{
    public Task<ApplicationUser> Login(string username, string password);

    public Task<ApplicationUser> GetAllUserInfoById(Guid userId);
}
