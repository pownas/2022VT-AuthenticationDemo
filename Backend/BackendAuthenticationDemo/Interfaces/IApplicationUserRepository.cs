using BackendAuthenticationDemo.Dtos;
using BackendAuthenticationDemo.Models;

namespace BackendAuthenticationDemo.Interfaces;

public interface IApplicationUserRepository : IRepositoryBase<ApplicationUser>
{
    public Task<ApplicationUser> Login(LoginDto dto);

    public Task<ApplicationUser> GetAllUserInfoById(Guid userId);
}