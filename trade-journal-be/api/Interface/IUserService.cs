using data_access.models;

public interface IUserService
{
  void ValidateUser(User user);
  bool CreateUser(User user);
  bool LoginUser(Login loginUser);
  User GetUser(Login user);
}