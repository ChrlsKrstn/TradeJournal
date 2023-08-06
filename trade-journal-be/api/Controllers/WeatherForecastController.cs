using Microsoft.AspNetCore.Mvc;
using System.Collections;

namespace api.Controllers;

public class UserTest {
    
    public string username { get; set; } 
    public string password { get; set; }
    public string firstname { get; set; }
    public string lastname { get; set; }

}
public class UserTestLogin {
    
    public string username { get; set; } 
    public string password { get; set; }

}

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{

    [HttpPost(Name = "GetWeatherForecast")]
    public IActionResult Get([FromBody] UserTestLogin test)
    {  
        Hashtable response = new()
        {
            { "username", "charles" },
            { "password", "charles" },
            { "firstname", "charles neo" },
            { "middlename", "roa" },
            { "lastname", "retardo" },
        }; 

        UserTest test1 = new() {
            username = "charles",
            password = "charles",
            firstname = "charles",
            lastname = "retardo",
        };

        if (test1.username != test.username && test1.password != test.password)
        {
            return Unauthorized();
        }

        return Ok(response);
    }
}
