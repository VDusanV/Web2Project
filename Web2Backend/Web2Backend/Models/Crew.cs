using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class CrewModel
    {
        [Key]
        public string Name { get; set; }
        public string Id { get; set; }
        public string CrewMembers { get; set; }
        public string Status { get; set; }
    }
}
