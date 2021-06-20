using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class UserModel
    {
        [Key]
        [Required]
        public string Username { get; set; }
        public string Password { get; set; }
        [Required]
        public string NameAndLastname { get; set; }
        public DateTime BirthDate { get; set; }
        [Required]
        public string Address { get; set; }
        public string ImageData { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string UserType { get; set; }

        public List<NotificationsModel> Notifications { get; set; }

        public string ActiveStatus { get; set; }


        public UserModel()
        {
            Username = "+";
            Password = "+";
            NameAndLastname = "+";
            BirthDate = DateTime.Now;
            Address = "+";
            Email = "+";
            UserType = "+";
            ActiveStatus = "Pending";
        }
    }
}
