using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace api.token_helper;

public class TokenHelper 
{

  public string getToken(string username) { 
    return GenerateJwtToken(username);
  }

  private static string GenerateJwtToken(string username)
  {
    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Thisiswillbemyjwtsecretkeyfromnowon"));
    var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
    var claims = new[]
    {
        new Claim(ClaimTypes.Name, username), 
    };
    var token = new JwtSecurityToken(
        claims: claims,
        expires: DateTime.UtcNow.AddDays(2),
        signingCredentials: credentials
    );
    
    return new JwtSecurityTokenHandler().WriteToken(token); 
  }
}