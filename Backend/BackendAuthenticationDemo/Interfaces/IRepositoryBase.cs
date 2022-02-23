using System.Linq.Expressions;

namespace BackendAuthenticationDemo.Interfaces;

public interface IRepositoryBase<TEntity> where TEntity : class
{
    public Task<TEntity?> GetByIdAsync(Guid id);

    public Task<TEntity?> SingleAsync(Expression<Func<TEntity, bool>> predicate);

    public Task<IEnumerable<TEntity>> GetAllAsync(params Expression<Func<TEntity, object>>[] includeEntities);

    public Task<IEnumerable<TEntity>> WhereAsync(Expression<Func<TEntity, bool>> predicate);

    public Task AddAsync(TEntity entity);

    public Task AddRangeAsync(IEnumerable<TEntity> entities);

    public void Update(TEntity entity);

    public void UpdateRange(IEnumerable<TEntity> entities);

    public void Delete(TEntity entity);

    public void DeleteRange(IEnumerable<TEntity> entities);
}