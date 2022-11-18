using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FinalProjectNet.Models;
using System.Configuration;

namespace FinalProjectNet.Data
{
    public class PostgresContext : DbContext
    {
        public PostgresContext (DbContextOptions<PostgresContext> options)
            : base(options)
        {
        }
        
        public DbSet<FinalProjectNet.Models.Owners> Owners { get; set; } 

        public DbSet<FinalProjectNet.Models.Vehicles> Vehicles { get; set; }

        public DbSet<FinalProjectNet.Models.Claims> Claims { get; set; }
    }
}
