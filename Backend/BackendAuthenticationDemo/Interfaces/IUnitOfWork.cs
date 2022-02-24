namespace BackendAuthenticationDemo.Interfaces;

public interface IUnitOfWork
{

    IApplicationUserRepository ApplicationUsers { get; }
    IApplicationRoleRepository ApplicationRoles { get; }

    Task<int> SaveChangesAsync();

    void Dispose();
}
