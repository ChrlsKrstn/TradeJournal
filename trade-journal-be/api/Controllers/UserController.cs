using Microsoft.AspNetCore.Mvc;  
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Collections;
using data_access.models;
using api.service;
using api.error_state;

namespace api.controllers;

[ApiController]
[Route("[controller]")]
public class UserController: ControllerBase
{  

  private readonly Hashtable response = new();

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

    response["data"] = userService.GetUser(loginUser);

    return Ok(response);
  }

  private static string GenerateJwtToken(string username)
  {
    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Thisiswillbemyjwtsecretkeyfromnowon"));
    var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
    var claims = new[]
    {
        new Claim(ClaimTypes.Name, username),
        // Add additional claims as needed
    };
    var token = new JwtSecurityToken(
        claims: claims,
        expires: DateTime.UtcNow.AddDays(2), // Token expiration time
        signingCredentials: credentials
    );
    return new JwtSecurityTokenHandler().WriteToken(token);
  }
}