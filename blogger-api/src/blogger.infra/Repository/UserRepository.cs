using blogger.domain.Entities;
using blogger.domain.Repositories;
using blogger.domain.ValueObjects;
using blogger.infra.DataContext;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace blogger.infra.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly BloggerDataContext _context;
        public UserRepository(BloggerDataContext context)
        {
            _context = context;
        }
        public bool CheckEmail(Email email)
        {
            throw new NotImplementedException();
        }

        public void Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public User GetUser(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Save(User user)
        {
            _context.Connection.Execute("USER_SPI", new
            {
                Id = user.Id,
                FirstName = user.Name.FirstName,
                LastName = user.Name.LastName,
                Email = user.Email.Address,
                Password = user.Password,
                Active = user.Active,
                Administrator = user.Administrator
            }, commandType: CommandType.StoredProcedure);
        }

        public void Update(User user)
        {
            throw new NotImplementedException();
        }
    }
}
