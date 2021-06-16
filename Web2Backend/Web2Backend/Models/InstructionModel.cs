using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class InstructionModel
    {
        [Key]
        public long Id { get; set; }
        public long DocumentId { get; set; }

        public string Action { get; set; }

        public string Element { get; set; }


    }
}
