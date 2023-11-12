using System.Collections;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace api.token_helper;

public class TokenHelper 
{

  public string getToken(Hashtable sessionToken) { 
    return GenerateJwtToken(sessionToken);
  }

  private static string GenerateJwtToken(Hashtable sessionToken)
  {
    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Thisiswillbemyjwtsecretkeyfromnowon"));
    var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
    var claims = new[]
    {
        new Claim(JwtRegisteredClaimNames.Sub, sessionToken["id"].ToString()), 
        new Claim(JwtRegisteredClaimNames.Name, sessionToken["name"].ToString()), 
        new Claim(JwtRegisteredClaimNames.Iat, sessionToken["iat"].ToString()), 
        new Claim(JwtRegisteredClaimNames.Exp, sessionToken["exp"].ToString()), 
        new Claim(JwtRegisteredClaimNames.Jti, sessionToken["jti"].ToString()), 
    };
    var token = new JwtSecurityToken(
        claims: claims,
        expires: DateTime.UtcNow.AddDays(2),
        signingCredentials: credentials
    );
    
    return new JwtSecurityTokenHandler().WriteToken(token);
  }
}