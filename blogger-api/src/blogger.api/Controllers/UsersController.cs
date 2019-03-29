﻿using System.Collections.Generic;
using blogger.api.Models;
using blogger.domain.Entities;
using blogger.domain.Repositories;
using blogger.domain.ValueObjects;
using Microsoft.AspNetCore.Mvc;

namespace blogger.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly IUserRepository _userRepository;
        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        // GET: api/Users
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Users/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Users
        [HttpPost]
        public void Post([FromBody] Models.User userInput)
        {
            var user = new domain.Entities.User(new Name(userInput.FirstName, userInput.LastName), new Email(userInput.Email), userInput.Password);
            _userRepository.Save(user);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
