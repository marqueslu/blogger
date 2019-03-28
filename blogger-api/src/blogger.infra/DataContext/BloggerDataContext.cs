using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace blogger.infra.DataContext
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
