
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    
    public class DeviceModel
    {
        [Key]
        public long DeviceID { get; set; }

        public string Name { get; set; }
        public string Type { get; set; }

        public string Coordinates { get; set; }

        public string Address { get; set; }


    }
}
