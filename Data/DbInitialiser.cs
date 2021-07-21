using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crave.Data
{
    public static class DbInitialiser
    {
        public static void Initialize(CraveContext context)
        {
            context.Database.EnsureCreated();

            if (context.AccountHolders.Any())
            { return; }
        }
    }
}
