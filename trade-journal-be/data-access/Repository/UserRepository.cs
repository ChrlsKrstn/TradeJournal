using data_access.models; 

namespace data_access.repository; 

public class UserRepository 
{
  private readonly TradeJournalContext _context;

  public UserRepository()
  {
    _context = new TradeJournalContext();
  }

  public bool IsExistuser(string username)
  { 
    return 
      _context.User
      .Where(u => u.Username == username)
      .Any();
  } 
  
  public bool LoginUser(Login loginUser)
  {
    return 
      _context.User
      .Where(u => u.Username == loginUser.Username)
      .Where(u => u.Password == loginUser.Password)
      .Any();
  }

  public User GetUser(Login loginUser)
  {
    return 
      _context.User
      .Where(u => u.Username == loginUser.Username)
      .Where(u => u.Password == loginUser.Password)
      .First();
  }
  
  public int RegisterUser(User user)
  {
    User userInformation = new() 
    {
      Id = user.Id,
      Username = user.Username,
      Password = user.Password,
      Firstname = user.Firstname,
      Lastname = user.Lastname,
      PhoneNumber = user.PhoneNumber,
    };

    _context.User.Add(userInformation); 

    return _context.SaveChanges();
  }

}