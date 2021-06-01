using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class NotificationsModel
    {
        [Key]
        public string Id { get; set; }
        public string Type { get; set; }
        public string Text { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
