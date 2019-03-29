﻿using blogger.domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace blogger.domain.Repositories
{
    public interface IArticlesRepository
    {
        Task<bool> CheckArticleTitle(string title);
        Task Save(Article article);
        Task Update(Article user);
        Task<IEnumerable<Article>> GetAll();
        Task<Article> GetArticle(int id);
        Task<IEnumerable<Article>> GetArticlesByUser(int userId);
        Task Delete(int id);
    }
}
