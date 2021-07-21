using Crave.DTO.AccountHolder;
using Crave.Interfaces;
using Crave.Models;
using Crave.Services.AccountHolderService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Crave.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountHolderController : ControllerBase
    {

        private readonly IAccountHolderService _AccountHolderService;

        public AccountHolderController(IAccountHolderService accountHolderService)
        {
            _AccountHolderService = accountHolderService;
        }

        [HttpGet]
        public async Task<ActionResult<List<AccountHolderDTO>>> Get()
        {
            return Ok(await _AccountHolderService.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AccountHolderDTO>> Get(int id)
        {
            return Ok(await _AccountHolderService.Get(id));
        }

        [HttpPost]
        public async Task<ActionResult<AccountHolderDTO>> Add(AccountHolderDTO accountHolder)
        {
            if (accountHolder.Name.Length > 100)
            {
                return BadRequest("Name must be 100 characters or less.");
            }

            return Ok(await _AccountHolderService.Add(accountHolder));
        }

        [HttpPut]
        public async Task<ActionResult<AccountHolderDTO>> Update(AccountHolderDTO accountHolder)
        {
            AccountHolderDTO response = await _AccountHolderService.Update(accountHolder);

            if (response == null)
            {
                return NotFound(response);
            }

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            bool response = await _AccountHolderService.Delete(id);
            return response ? Ok(response) : NotFound(response);
        }
    }
}
