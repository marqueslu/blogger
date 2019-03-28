using System;

namespace blogger.domain.Entities
{
    public class Article
    {
        public Article(string title, string content)
        {
            Id = Guid.NewGuid();
            CreatedAt = new DateTime();
        }

        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
