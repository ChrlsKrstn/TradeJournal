using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace api.error_state;

public class ErrorStateHelper
{

  public static Dictionary<string, string> ErrorState(ModelStateDictionary modelState) {
    
    Dictionary<string, string> errorDictionary = new();

    foreach (var key in modelState.Keys)
    {
        var errors = modelState[key].Errors.Select(e => e.ErrorMessage);
        if (errors.Any())
        {
            errorDictionary[key] = string.Join("; ", errors);
        }
    }

    return errorDictionary;
   }
}
