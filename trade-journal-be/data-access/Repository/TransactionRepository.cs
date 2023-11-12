using data_access.models;

namespace data_access.repository; 

public class TransactionRepository
{
  private readonly TradeJournalContext _context;

  public TransactionRepository()
  {
    _context = new TradeJournalContext();
  }
  
  public int RegisterTransaction(Transaction transaction)
  {
    Transaction transactionInformation = new()
    {
      Id = transaction.Id,
      Create_User = transaction.Create_User,
      Created_Date = DateTime.Now,
      Transaction_Type =  transaction.Transaction_Type,
      Amount_USD = transaction.Amount_USD,
      Exchange_Rate = transaction.Exchange_Rate,
      Amount_PHP = transaction.Amount_PHP,
    };

    _context.Transaction.Add(transactionInformation);

    return _context.SaveChanges();
  }

  public List<TransactionViewModel> GetUserTransaction(String user)
  {
    return _context.Transaction
      .Where(u => u.Create_User == user)
      .Select(x => new TransactionViewModel{
        Id = x.Id,
        Create_User = x.Create_User,
        Created_Date = x.Created_Date.ToString("yyyy-MM-dd"),
        Transaction_Type = x.Transaction_Type,
        Amount_USD = x.Amount_USD,
        Exchange_Rate = x.Exchange_Rate,
        Amount_PHP = x.Amount_PHP
      })
      .ToList();
     
  }
}