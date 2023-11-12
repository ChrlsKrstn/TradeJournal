using data_access.models;
using data_access.repository;

namespace api.service;

public class TransactionService
{
  private readonly TransactionRepository _transactionRepository = new();

  public int RegisterTransaction(Transaction transaction)
  { 
    return _transactionRepository.RegisterTransaction(transaction);
  } 

  public List<TransactionViewModel> GetUserTransaction(String user)
  {
    return _transactionRepository.GetUserTransaction(user);
  }
}