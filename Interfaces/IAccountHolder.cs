using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Crave.Interfaces
{
    public interface IAccountHolder
    {
        int? ID { get; set; }
        [StringLength(100, ErrorMessage = "Account Holder name cannot exceed 100 characters in length. ")]
        string Name { get; set; }
        string IBAN { get; set; }
    }
}
