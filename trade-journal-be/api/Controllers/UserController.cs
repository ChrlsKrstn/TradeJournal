using Microsoft.AspNetCore.Mvc;  
using System.Collections;
using data_access.models;
using api.service;
using api.error_state;
using api.token_helper;
using Microsoft.AspNetCore.Authorization;

namespace api.controllers;

[ApiController]
[Route("[controller]")]
public class UserController: ControllerBase
{  
  private readonly Hashtable response = new();

  [Authorize]
  [HttpPost("register")]
  public IActionResult Register([FromBody] User user)
  {
    UserService userService = new(ModelState);   
    response["success"] = true; 
    response["message"] = "Registration success!";

    if (!userService.CreateUser(user))
    { 
      response["success"] = false; 
      response["message"] = "Registration failed!";
      response.Add("error", ErrorStateHelper.ErrorState(ModelState));
      
      return BadRequest(response);
    } 
 
    return Created("register", response);
  } 
 
  [HttpPost("login")]
  public IActionResult LoginUser([FromBody] Login loginUser)
  { 
    UserService userService = new(ModelState); 
    response["success"] = true; 
    response["message"] = "Login success!";

    if (!userService.LoginUser(loginUser))
    {
      response["success"] = false; 
      response["message"] = "Wrong username or password!";
      response.Add("error", ErrorStateHelper.ErrorState(ModelState)); 
      
      return BadRequest(response);
    }
    
    TokenHelper token = new();
    response["name"] = userService.GetUser(loginUser);
    response["token"] = token.getToken(loginUser.Username);
    Console.Write(response["token"]);
    return Ok(response);
  }
}