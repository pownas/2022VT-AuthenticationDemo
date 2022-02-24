using BackendAuthenticationDemo.Data;
using BackendAuthenticationDemo.Interfaces;

namespace BackendAuthenticationDemo.Repositories;

public class UnitOfWork : IUnitOfWork, IDisposable
{
    //Fields
    private readonly ApplicationDbContext _context;

    //Properties
    public IApplicationUserRepository ApplicationUsers { get; set; }
    public IApplicationRoleRepository ApplicationRoles { get; set; }

    //Constructor
    public UnitOfWork(ApplicationDbContext context)
    {
        _context = context;
        ApplicationUsers = new ApplicationUserRepository(_context);
        ApplicationRoles = new ApplicationRoleRepository(_context);
    }

    //Methods
    public async Task<int> SaveChangesAsync()
    {
        return await _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}
