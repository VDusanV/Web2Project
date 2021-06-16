﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class SwitchingPlanHistoryModel
    {
        [Key]
        public long Id { get; set; }
        public string DateChange { get; set; }
        public string ChangeBy { get; set; }
        public string NewStatus { get; set; }


    }
}
