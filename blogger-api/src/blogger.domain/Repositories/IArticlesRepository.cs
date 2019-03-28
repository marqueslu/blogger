using blogger.domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace blogger.domain.Repositories
{
    public interface IArticlesRepository
    {
        bool CheckArticleTitle(string title);
        void Save(Article article);
        void Update(Article user);
        IEnumerable<Article> GetAll();
        User GetArticle(Guid id);
        void Delete(Guid id);
    }
}
