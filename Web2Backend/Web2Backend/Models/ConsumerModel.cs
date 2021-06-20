using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class ConsumerModel
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string City { get; set; }
        public string Postal { get; set; }
        public int Priority { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string Type { get; set; }
        public bool Deleted { get; set; }


    }
}
