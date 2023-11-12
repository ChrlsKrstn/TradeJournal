using data_access.models; 

namespace data_access.repository; 

public class UserRepository: IUserRepository 
{
  public TradeJournalContext GetDbContext()
  {
    return new TradeJournalContext();
  }

  public bool IsExistuser(string username)
  { 
    return 
      GetDbContext().User
      .Where(u => u.Username == username)
      .Any();
  } 
  
  public bool LoginUser(Login loginUser)
  {
    return 
      GetDbContext().User
      .Where(u => u.Username == loginUser.Username)
      .Where(u => u.Password == loginUser.Password)
      .Any();
  }

  public User GetUser(Login loginUser)
  {
    return 
      GetDbContext().User
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

    GetDbContext().User.Add(userInformation); 

    return GetDbContext().SaveChanges();
  }

}