using blogger.api.DataContext;
using blogger.api.Models;
using blogger.api.Repositories.Interfaces;
using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogger.api.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly BloggerDataContext _context;

        public UserRepository(BloggerDataContext context)
        {
            _context = context;
        }
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
