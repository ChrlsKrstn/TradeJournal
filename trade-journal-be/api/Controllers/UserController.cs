using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;  
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Collections;
using data_access.models;
using data_access.repository;

namespace api.controllers;

[ApiController]
[Route("[controller]")]
public class UserController: ControllerBase
{ 

  [HttpPost("register")]
  public IActionResult Register([FromBody] User user)
  {

    UserRepository.RegisterUser(user); 
    // Hashtable test = new()
    // {
    //   {"token", GenerateJwtToken("Thisismyusername")}
    // };
    return Ok();
  } 

  [Authorize]
  [HttpGet("authorizedRegister")]
  public IActionResult AuthorizedRegister()
  {

    Hashtable test = new()
    {
      {"token", "Ok"}
    };
    return Ok(test);
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
    Console.WriteLine(DateTime.UtcNow);
    var token = new JwtSecurityToken(
        claims: claims,
        expires: DateTime.UtcNow.AddDays(2), // Token expiration time
        signingCredentials: credentials
    );
    return new JwtSecurityTokenHandler().WriteToken(token);
  }
}