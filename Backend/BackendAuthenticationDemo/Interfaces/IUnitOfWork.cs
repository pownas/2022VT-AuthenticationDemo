namespace BackendAuthenticationDemo.Interfaces;

public interface IUnitOfWork : IDisposable
{

    IApplicationUserRepository ApplicationUsers { get; }
    IApplicationRoleRepository ApplicationRoles { get; }

    Task<int> SaveChangesAsync();
}
