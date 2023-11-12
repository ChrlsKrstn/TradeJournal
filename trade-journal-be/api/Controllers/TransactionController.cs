using System.Collections;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using api.service;
using data_access.models;

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
    string userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

    TransactionService transactionService = new(); 
    Transaction transaction1 = new()
    {
      Create_User = userId,
      Transaction_Type = transaction["transaction"].ToString(),
      Amount_USD = Decimal.Parse(transaction["amount_usd"].ToString()),
      Exchange_Rate = Decimal.Parse(transaction["exchange_rate"].ToString()),
      Amount_PHP = Decimal.Parse(transaction["amount_php"].ToString()),
    }; 
    transactionService.RegisterTransaction(transaction1);

    response["status"] = true;
    return Created("deposit", response);
  }

  [HttpPost("getUserTransaction")]
  [Authorize]
  public IActionResult GetUserTransaction()
  { 
    string userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    TransactionService transactionService = new(); 

    response["data"] = transactionService.GetUserTransaction(userId);
    return Ok(response);
  }
} 