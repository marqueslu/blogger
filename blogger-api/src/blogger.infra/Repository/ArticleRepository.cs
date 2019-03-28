using blogger.domain.Entities;
using blogger.domain.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace blogger.infra.Repository
{
    public class ArticleRepository : IArticlesRepository
    {
        public bool CheckArticleTitle(string title)
        {
            throw new NotImplementedException();
        }

        public void Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Article> GetAll()
        {
            throw new NotImplementedException();
        }

        public User GetArticle(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Save(Article article)
        {
            throw new NotImplementedException();
        }

        public void Update(Article user)
        {
            throw new NotImplementedException();
        }
    }
}
