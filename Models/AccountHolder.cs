using Crave.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace Crave.Models
{
    public class AccountHolder : IAccountHolder
    {
        public int? ID { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        [Required]
        public string IBAN { get; set; }
    }
}
