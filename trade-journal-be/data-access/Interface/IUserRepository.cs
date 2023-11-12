using data_access;
using data_access.models;

public interface IUserRepository
{
  TradeJournalContext GetDbContext();
  bool IsExistuser(string username);
  bool LoginUser(Login loginUser);
  public User GetUser(Login loginUser);
  public int RegisterUser(User user);
}