using AutoMapper;
using Crave.DTO.AccountHolder;
using Crave.Models;

namespace Crave
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<AccountHolder, AccountHolderDTO>();
            CreateMap<AccountHolderDTO, AccountHolder>();
        }
    }
}
