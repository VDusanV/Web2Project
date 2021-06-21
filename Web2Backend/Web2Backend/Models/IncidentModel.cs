using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class IncidentModel
    {
        [Key]
        public string IncidentID { get; set; }
        public string StartDate { get; set; }
        public string Status { get; set; }
        
    }
}
