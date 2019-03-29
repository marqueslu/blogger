using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using blogger.api.Models;
using blogger.api.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace blogger.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private readonly IArticleRepository _article;
        public ArticlesController(IArticleRepository article)
        {
            _article = article;
        }
        // GET: api/Articles
        [HttpGet]
        public async Task<IEnumerable<Article>> Get()
        {
            return await _article.GetAll();
        }

        // GET: api/Articles/5
        [HttpGet("{id}")]
        public async Task<IEnumerable<Article>> Get(int id)
        {
            return await _article.GetArticle(id);
        }

        // POST: api/Articles
        [HttpPost]
        public ActionResult Post([FromBody]Article article)
        {
            _article.Create(article);
            return Ok();
        }

        // PUT: api/Articles/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]Article article)
        {
            if (id == 0) return BadRequest();
            _article.Update(id, article);
            return Ok();

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            if (id == 0) return BadRequest();
            _article.Delete(id);
            return Ok();
        }
    }
}
