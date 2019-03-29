using blogger.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogger.api.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<bool> CheckEmail(string email);
        Task Create(User user);
        Task Update(User user);
        Task<IEnumerable<User>> GetAll();
        Task<User> GetUser(Guid id);
        Task Delete(Guid id);
    }
}
