﻿using System;
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

        public string Type { get; set; }
        public string WorkRequest { get; set; }
        public string Status { get; set; }
        public string Incident { get; set; }
        public string Street { get; set; }
        public string startDate { get; set; }
        public string endDate { get; set; }
        public string CreatedBy { get; set; }
        public string Notes { get; set; }
        public string Company { get; set; }
        public string Phone { get; set; }
        public string DateCreated { get; set; }
        public string ImageData { get; set; }
        public string[] Equipment { get; set; }




    }
}