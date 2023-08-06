using Models;
using DataAccess;

namespace BusinessLogic; 

public class UserBusinessLogic 
{
  public Boolean RegisterUser(User user)
  {
    
    Console.WriteLine(user.Username); 
    using (var context = new TradeJournalContext())
    {
      User userInformation = new() 
      {
        Id = user.Id,
        Username = user.Username,
        Password = user.Password,
        Firstname = user.Firstname,
        Lastname = user.Lastname,
      };
      context.User.Add(userInformation);
      context.SaveChanges();
    }
      // var userInformation = new User()
      // {
      //   Id = user.Id,
      //   Username = user.Username,
      //   Password = user.Password,
      //   Firstname = user.Firstname,
      //   Lastname = user.Lastname,
      // };

      // context.User.Add(userInformation);
      // context.SaveChanges();
    
    return true;
  }
}