using Crave.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Crave.Interfaces
{
    public interface ICraveContext : IDisposable
    {
        public DbSet<AccountHolder> AccountHolders { get; set; }

        Task<int> SaveChangesAsync();
    }
}
