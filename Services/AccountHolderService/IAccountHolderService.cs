using Crave.DTO.AccountHolder;
using Crave.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Crave.Services.AccountHolderService
{
    public interface IAccountHolderService
    {
        Task<AccountHolderDTO> Get(int id);
        Task<List<AccountHolderDTO>> GetAll();
        Task<AccountHolderDTO> Add(AccountHolderDTO accountHolder);
        Task<AccountHolderDTO> Update(AccountHolderDTO accountHolder);
        Task<bool> Delete(int id);
    }
}
