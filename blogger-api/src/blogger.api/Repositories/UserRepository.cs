using blogger.api.Models;
using blogger.api.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogger.api.Repositories
{
    public class UserRepository : IUserRepository
    {
        public Task<bool> CheckEmail(string email)
        {
            throw new NotImplementedException();
        }

        public Task Create(User user)
        {
            throw new NotImplementedException();
        }

        public Task Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<User>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<User> GetUser(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task Update(User user)
        {
            throw new NotImplementedException();
        }
    }
}
