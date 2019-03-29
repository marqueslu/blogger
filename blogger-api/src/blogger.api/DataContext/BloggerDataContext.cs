using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace blogger.api.DataContext
{
    public class BloggerDataContext : IDisposable
    {
        public SqlConnection Connection { get; set; }
        private IConfiguration configuration;
        public BloggerDataContext(IConfiguration configuration)
        {
            this.configuration = configuration;

            Connection = new SqlConnection(this.configuration.GetConnectionString("Blogger"));

            Connection.Open();
        }
        public void Dispose()
        {
            if (Connection.State != ConnectionState.Closed)
                Connection.Close();
        }
    }
}
