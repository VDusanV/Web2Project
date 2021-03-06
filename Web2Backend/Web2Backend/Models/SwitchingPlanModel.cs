using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class SwitchingPlanModel
    {
        [Key]
        public long Id { get; set; }
        [Required]
        [ConcurrencyCheck]
        public string Type { get; set; }
        [ConcurrencyCheck]
        public string WorkRequest { get; set; }
        [ConcurrencyCheck]
        public string Status { get; set; }
        [ConcurrencyCheck]
        public string Incident { get; set; }
        [Required]
        [ConcurrencyCheck]
        public string Street { get; set; }
        [Required]
        [ConcurrencyCheck]
        public string startDate { get; set; }
        [Required]
        [ConcurrencyCheck]
        public string endDate { get; set; }
        [ConcurrencyCheck]
        public string Crew { get; set; }
        [Required]
        [ConcurrencyCheck]
        public string CreatedBy { get; set; }
        [ConcurrencyCheck]
        public string Notes { get; set; }
        [Required]
        [ConcurrencyCheck]
        public string Company { get; set; }
        [Required]
        [ConcurrencyCheck]
        public string Phone { get; set; }
        [ConcurrencyCheck]
        public string DateCreated { get; set; }
        [ConcurrencyCheck]
        public string ImageData { get; set; }
        [ConcurrencyCheck]
        public string Equipment { get; set; }




    }
}
