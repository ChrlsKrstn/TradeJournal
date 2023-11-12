using Microsoft.AspNetCore.Mvc.ModelBinding;
using data_access.models;

namespace api.service;

public class UserService: IUserService 
{
    private readonly ModelStateDictionary _modelState;
    private readonly IUserRepository _userRepository;
    public UserService(ModelStateDictionary modelState, IUserRepository userRepository)
    {
        _modelState = modelState;
        _userRepository = userRepository;
    }  

    public void ValidateUser(User user)
    { 
        if (user.Username.Length == 0) 
          _modelState.AddModelError("Username","Username is required.");
        if (user.Password.Length == 0) 
          _modelState.AddModelError("Password", "Password is required.");
        if (user.Firstname.Length == 0)
          _modelState.AddModelError("Firstname", "Firstname is required");
        if (user.Lastname.Length == 0) 
           _modelState.AddModelError("Lastname", "Lastname is required");
        if (_userRepository.IsExistuser(user.Username))
          _modelState.AddModelError("Username", "Username already existing!");
    }

    public bool CreateUser(User user)
    {   
      ValidateUser(user);

      if (!_modelState.IsValid)
        return _modelState.IsValid;

      _userRepository.RegisterUser(user);  
      return _modelState.IsValid;
    }

    public bool LoginUser(Login loginUser)
    {
      if (!_userRepository.LoginUser(loginUser))
        _modelState.AddModelError("Username", "User does not exist!"); 

      return _modelState.IsValid;
    }

    public User GetUser(Login user)
    {
      return _userRepository.GetUser(user);
    }
}