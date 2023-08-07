using Models;
using DataAccess;

namespace BusinessLogic; 

public class UserBusinessLogic 
{
  public static int RegisterUser(User user)
  { 
    int countChanges = 0;
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
      countChanges = context.SaveChanges();
    } 

    return countChanges;
  }
}