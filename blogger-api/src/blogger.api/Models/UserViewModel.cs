﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogger.api.Models
{
    public class UserViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }        
    }
}
