using Microsoft.EntityFrameworkCore;
using data_access.models;

namespace data_access;
public class TradeJournalContext: DbContext
{ 

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  { 
    optionsBuilder.UseSqlite("DataSource=app.db;Cache=Shared");
  }
  public DbSet<User> User { get; set; }
}
