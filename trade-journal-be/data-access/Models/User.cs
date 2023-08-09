namespace data_access.models;

  public class User
  {
    public int Id { get; set;}
    public string Username { get; set;}
    public string Password { get; set;}
    public string Firstname { get; set;}
    public string Lastname { get; set;}
    public int PhoneNumber { get; set;}

  }

  public class Login
  { 
    public string Username { get; set;}
    public string Password{ get; set;}
  }
