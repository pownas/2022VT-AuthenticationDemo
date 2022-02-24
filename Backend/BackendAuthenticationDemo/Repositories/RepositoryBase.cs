using BackendAuthenticationDemo.Data;
using BackendAuthenticationDemo.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace BackendAuthenticationDemo.Repositories;

public abstract class RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : class
{
    // Fields
    protected readonly ApplicationDbContext _dbContext;
    protected readonly DbSet<TEntity> Entities;

    //Constructor
    protected RepositoryBase(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
        Entities = _dbContext.Set<TEntity>();
    }

    //Methods
    public async Task<TEntity?> GetByIdAsync(Guid id)
    {
        return await Entities.FindAsync(id);
    }

    public async Task<TEntity?> SingleAsync(Expression<Func<TEntity, bool>> predicate)
    {
        return await Entities.SingleOrDefaultAsync(predicate);
    }

    public async Task<IEnumerable<TEntity>> GetAllAsync(params Expression<Func<TEntity, object>>[] includeEntities)
    {
        var entities = Entities.AsQueryable();
        foreach (var include in includeEntities)
            entities = entities.Include(include);

        return await entities.ToListAsync();
    }

    public async Task<IEnumerable<TEntity>> WhereAsync(Expression<Func<TEntity, bool>> predicate)
    {
        var entities = Entities.Where(predicate);
        return await entities.ToListAsync();
    }

    public async Task AddAsync(TEntity entity)
    {
        await Entities.AddAsync(entity);
    }

    public async Task AddRangeAsync(IEnumerable<TEntity> entities)
    {
        await Entities.AddRangeAsync(entities);
    }

    public void Update(TEntity entity)
    {
        Entities.Update(entity);
    }

    public void UpdateRange(IEnumerable<TEntity> entities)
    {
        Entities.UpdateRange(entities);
    }

    public void Delete(TEntity entity)
    {
        Entities.Remove(entity);
    }

    public void DeleteRange(IEnumerable<TEntity> entities)
    {
        Entities.RemoveRange(entities);
    }
}