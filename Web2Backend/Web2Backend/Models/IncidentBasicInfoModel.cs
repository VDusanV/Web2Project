using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Models
{
    public class IncidentBasicInfoModel
    {
        [Key]
        public string IncidentID { get; set; }
        public string IncidentType { get; set; }

        public int Priority { get; set; }

        public bool Confirmed { get; set; }

        public string Status { get; set; }

        public DateTime ETA { get; set; } //estimated time of the crew arrival

        public DateTime ATA { get; set; } //actual time of the crew arrival

        public DateTime IncidentTime { get; set; } //when did incident happen

        public DateTime ETR { get; set; } //estimated time to restore power

        public int AffectedCustomers { get; set; }

        public int Calls { get; set; }  //number of calls

        public double Voltage { get; set; } // [kV]

        public DateTime ScheduledTime { get; set; } // start date of incident fix

        public string AssignedTo { get; set; } //specifikacija str 7. (slika 5.) pise zadnje polje - dodeli sebi resavanje
                                               //al na slici nema tog polja 
                                              //mzd dodati neki button samo da klikne dodijeli sebi 
                                              // i onda u vidu stringa sacuvati neki identifikator korisnika koji je to kliknuo
                                              //a moze i biti prazno ako ostavi nekome drugom da preuzme
                                              
    }
}
