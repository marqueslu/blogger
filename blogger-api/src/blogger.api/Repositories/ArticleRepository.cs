using blogger.api.DataContext;
using blogger.api.Models;
using blogger.api.Repositories.Interfaces;
using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogger.api.Repositories
{
    public class ArticleRepository : IArticleRepository
    {
        private readonly BloggerDataContext _context;
        public ArticleRepository(BloggerDataContext context)
        {
            _context = context;
        }
        public Task<bool> CheckArticleTitle(string title)
        {
            throw new NotImplementedException();
        }

        public async Task Delete(int id)
        {
            string sQuery = "DELETE FROM ARTICLE WHERE Id = @Id";
            await _context.Connection.QueryAsync(sQuery, new { Id = id });
        }

        public Task<IEnumerable<Article>> GetAll()
        {
            string sQuery = "SELECT Id, Title, Content, CreatedAt FROM ARTICLE";
            return _context.Connection.QueryAsync<Article>(sQuery, new { });
        }

        public async Task<IEnumerable<Article>> GetArticle(int id)
        {
            string sQuery = "SELECT Id, Title, Content, CreatedAt FROM ARTICLE WHERE Id = @Id";
            return await _context.Connection.QueryAsync<Article>(sQuery, new { Id = id});
        }

        public Task<IEnumerable<Article>> GetArticlesByUser(int userId)
        {
            throw new NotImplementedException();
        }

        public async Task Create(Article article)
        {
            string query = "INSERT INTO ARTICLE(Title, Content, CreatedAt) VALUES(@Title, @Content, @CreatedAt)";
            await _context.Connection.QueryAsync(query,
                new
                {
                    Title = article.Title,
                    Content = article.Content,
                    CreatedAt = article.CreatedAt
                });
        }

        public async Task Update(int id, Article article)
        {
            string query = "UPDATE ARTICLE SET Title = @Title, Content = @Content Where Id = @Id";
            await _context.Connection.QueryAsync(query,
                new
                {
                    Id = id,
                    Title = article.Title,
                    Content = article.Content,
                    CreatedAt = article.CreatedAt
                });
        }
    }
}
