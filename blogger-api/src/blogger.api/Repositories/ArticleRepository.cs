using blogger.api.Models;
using blogger.api.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogger.api.Repositories
{
    public class ArticleRepository : IArticleRepository
    {
        public Task<bool> CheckArticleTitle(string title)
        {
            throw new NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Article>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Article> GetArticle(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Article>> GetArticlesByUser(int userId)
        {
            throw new NotImplementedException();
        }

        public Task Create(Article article)
        {
            throw new NotImplementedException();
        }

        public Task Update(Article user)
        {
            throw new NotImplementedException();
        }
    }
}
