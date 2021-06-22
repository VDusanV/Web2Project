using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Web2Backend.Data;
using Web2Backend.Models;

namespace Web2Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncidentsController : ControllerBase
    {
        private readonly ProjectContext _context;
        public IncidentsController(ProjectContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<IncidentModel>>> GetIncidents()
        {
            return await _context.Incidents.ToListAsync();
        }


        [HttpPost]
        [Route("AddIncident")]
        public async Task<ActionResult<IncidentModel>> AddIncident(IncidentModel inc)
        {

            /*ElementModel element1 = new ElementModel()
            {
                Address = "Bul Cara Lazara 39",
                Coordinates = "39193",
                Type = "prekidac",
                Name = "PRE1"

            };*/
            IncidentModel incident = new IncidentModel()
            {
                IncidentID = Guid.NewGuid().ToString(),
                StartDate = inc.StartDate,
                Status = inc.Status
            };




            _context.Incidents.Add(incident);

            await _context.SaveChangesAsync();

            //SaveStreet("sdfsdf");

            return CreatedAtAction("GetIncidents", incident);

        }




    }
}
