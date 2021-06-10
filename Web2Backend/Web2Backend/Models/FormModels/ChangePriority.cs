using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models.FormModels
{
    public class ChangePriority
    {
        [Key]
        public string StreetName { get; set; }
        public int StreetPriority { get; set; }
    }
}
