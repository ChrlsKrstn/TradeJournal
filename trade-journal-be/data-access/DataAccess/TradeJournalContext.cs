using Microsoft.EntityFrameworkCore;
using Models;

namespace DataAccess;
public class TradeJournalContext: DbContext
{ 

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  { 
    optionsBuilder.UseSqlite("DataSource=app.db;Cache=Shared");
  }
  public DbSet<User> User { get; set; }
}
