using Crave.Interfaces;
using Crave.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Crave.Data
{
    public class CraveContext : DbContext, ICraveContext
    {
        public CraveContext(DbContextOptions<CraveContext> options) : base(options)
        {
        }

        public DbSet<AccountHolder> AccountHolders { get; set; }

        public Task<int> SaveChangesAsync() => base.SaveChangesAsync();
    }
}
