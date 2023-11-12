namespace data_access.models;

  public class Transaction
  {
    public int Id { get; set;}
    public string Create_User { get; set;}
    public DateTime Created_Date { get; set;}
    public string Transaction_Type { get; set;}
    public decimal Amount_USD { get; set;}
    public decimal Exchange_Rate { get; set;}
    public decimal Amount_PHP { get; set;}

  }
public class TransactionViewModel
{
    public int Id { get; set; }
    public string Create_User { get; set; }
    public string Created_Date { get; set; }
    public string Transaction_Type { get; set; }
    public decimal Amount_USD { get; set; }
    public decimal Exchange_Rate { get; set; }
    public decimal Amount_PHP { get; set; }
}