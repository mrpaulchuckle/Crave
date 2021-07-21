using AutoMapper;
using Crave.DTO.AccountHolder;
using Crave.Interfaces;
using Crave.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Crave.Services.AccountHolderService
{
    public class AccountHolderService : IAccountHolderService
    {
        private readonly IMapper _Mapper;
        private readonly ICraveContext _CraveContext;

        public AccountHolderService(IMapper mapper, ICraveContext craveContext)
        {
            _Mapper = mapper;
            _CraveContext = craveContext;
        }

        public async Task<List<AccountHolderDTO>> GetAll() => _Mapper.Map<List<AccountHolderDTO>>(await _CraveContext.AccountHolders.ToListAsync());

        public async Task<AccountHolderDTO> Add(AccountHolderDTO accountHolder)
        {
            try
            {
                AccountHolder newHolder = _Mapper.Map<AccountHolder>(accountHolder);
                await _CraveContext.AccountHolders.AddAsync(newHolder);
                await _CraveContext.SaveChangesAsync();
                return _Mapper.Map<AccountHolderDTO>(await _CraveContext.AccountHolders.FindAsync(newHolder.ID));
            }
            catch
            {
                throw;
            }
        }

        public async Task<AccountHolderDTO> Get(int id) => _Mapper.Map<AccountHolderDTO>(await _CraveContext.AccountHolders.FindAsync(id));

        public async Task<AccountHolderDTO> Update(AccountHolderDTO accountHolder)
        {
            try
            {
                IAccountHolder myHolderToUpdate = await _CraveContext.AccountHolders.FindAsync(accountHolder.ID);

                myHolderToUpdate.IBAN = accountHolder.IBAN;
                myHolderToUpdate.Name = accountHolder.Name;

                await _CraveContext.SaveChangesAsync();

                return _Mapper.Map<AccountHolderDTO>(myHolderToUpdate);
            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> Delete(int id)
        {
            try
            {
                AccountHolder myHolder = await _CraveContext.AccountHolders.FindAsync(id);
                _CraveContext.AccountHolders.Remove(myHolder);
                await _CraveContext.SaveChangesAsync();
                return true;
            }
            catch
            {
                throw;
            }
        }
    }
}
