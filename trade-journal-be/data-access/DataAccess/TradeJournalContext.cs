using Microsoft.EntityFrameworkCore;
using Models;

namespace DataAccess
{
    public class TradeJournalContext: DbContext
    {
        public TradeJournalContext(DbContextOptions options): base(options){}
        public DbSet<User> User { get; set; }
    }
}