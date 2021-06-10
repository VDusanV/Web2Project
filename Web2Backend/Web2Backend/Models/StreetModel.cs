using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class StreetModel
    {
        [Key]
        public string Name { get; set; }

        public int dPriority { get; set; }

        public int cPriority { get; set; }
    }
}
