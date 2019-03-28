using blogger.domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace blogger.domain.Entities
{
    public class User
    {
        public User(Name name, Email email, string password)
        {
            Id = Guid.NewGuid();
            Name = name;
            Email = email;
            Password = password;
            Active = true;
            Administrator = false;
        }

        public Guid Id { get; set; }        
        public Name Name { get; set; }
        public Email Email { get; set; }
        public string Password { get; set; }
        public bool Active { get; set; }
        public bool Administrator { get; set; }

        public void Activate() => Active = true;

        public void Deactivate() => Active = false;

        public void SetAsAdministrator() => Administrator = true;

        public void UnsetAsAdministrator() => Administrator = false;

    }
}
