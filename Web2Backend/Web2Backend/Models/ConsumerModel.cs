﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class ConsumerModel
    {

        public long Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Postal { get; set; }
        public int Priority { get; set; }
        public string Phone { get; set; }
        public string Type { get; set; }
        public bool Deleted { get; set; }


    }
}
