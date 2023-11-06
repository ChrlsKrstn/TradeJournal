using System.Collections;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace api.controllers;

[ApiController]
[Route("[controller]")]
public class TransactionController: ControllerBase
{
  private readonly Hashtable response = new();

  [HttpPost("deposit")]
  [Authorize]
  public IActionResult Deposit([FromBody] Hashtable transaction)
  {
    
    foreach(var key in transaction.Keys) {
      Console.WriteLine(transaction[key]);
    }
    Console.WriteLine(User.Identity.Name);
    return Created("deposit", response);
  }
}