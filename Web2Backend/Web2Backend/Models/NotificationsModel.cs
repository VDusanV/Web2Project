using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class NotificationsModel
    {
        [Key]
        public long Id { get; set; }
        public string Type { get; set; }
        public string Text { get; set; }
        public string Status { get; set; }
        public DateTime TimeStamp { get; set; }
        [JsonIgnore]
        public UserModel User { get; set; }
    }
}
