using blogger.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogger.api.Repositories.Interfaces
{
    public interface IArticleRepository
    {
        Task<bool> CheckArticleTitle(string title);
        Task Create(Article article);
        Task Update(Article user);
        Task<IEnumerable<Article>> GetAll();
        Task<Article> GetArticle(int id);
        Task<IEnumerable<Article>> GetArticlesByUser(int userId);
        Task Delete(int id);
    }
}
