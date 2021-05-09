using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class CallModel
    {
        [Key]
        public long CallID { get; set; }

        public string Reason { get; set; }

        public string Comment { get; set; }

        public string Hazard { get; set; }




    }
}
