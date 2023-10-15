using System.Collections;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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
    return Created("deposit", response);
  }
}