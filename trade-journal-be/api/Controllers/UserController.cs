using Microsoft.AspNetCore.Mvc; 
using System.Collections;
using Models;
using BusinessLogic;
namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController: ControllerBase
{
  
  readonly private UserBusinessLogic userBusinessLogic= new();
  [HttpPost("register")]
  public IActionResult Register([FromBody] User user)
  { 

    userBusinessLogic.RegisterUser(user);

    return Ok(userBusinessLogic.RegisterUser(user));
  } 
}