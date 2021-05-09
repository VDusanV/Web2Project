using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class ResolutionModel
    {
        public string Cause { get; set; }

        public string Subcause { get; set; }
        public string ConstructionType { get; set; }
        public string Material { get; set; }
    }
}
