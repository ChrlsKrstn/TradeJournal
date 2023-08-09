using System.Collections;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using data_access.models;
using data_access.repository;

namespace api.service;

public class UserService
{

    private ModelStateDictionary _modelState;

    public UserService(ModelStateDictionary modelState)
    {
        _modelState = modelState;
    } 

    protected bool ValidateUser(User user)
    { 
        if (user.Username.Length == 0) 
            _modelState.AddModelError("Username","Username is required.");
        if (user.Password.Length == 0) 
            _modelState.AddModelError("Password", "Password is required.");
        if (user.Firstname.Length == 0)
            _modelState.AddModelError("Firstname", "Firstname is required");
        if (user.Lastname.Length == 0) 
            _modelState.AddModelError("Lastname", "Lastname is required");

        return _modelState.IsValid;
    }

    protected bool ExistenceCheckUser(User user)
    { 
        return true;
    }

    public void CreateUser(User user)
    {  
        ValidateUser(user);
    }
}