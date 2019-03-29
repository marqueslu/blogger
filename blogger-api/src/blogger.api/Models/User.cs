using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogger.api.Models
{
    public class User
    {        
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastaName { get; set; }
        public string Email { get; set; }
        public bool Active { get; set; }
        public bool Administrator { get; set; }
        public string Password { get; set; }
    }
}
