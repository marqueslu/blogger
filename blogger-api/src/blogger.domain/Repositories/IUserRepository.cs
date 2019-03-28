using blogger.domain.Entities;
using blogger.domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace blogger.domain.Repositories
{
    public interface IUserRepository
    {
        bool CheckEmail(Email email);
        void Save(User user);
        void Update(User user);
        IEnumerable<User> GetAll();
        User GetUser(Guid id);
        void Delete(Guid id);            
    }
}
