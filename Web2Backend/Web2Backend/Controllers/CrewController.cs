using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Backend.Data;
using Web2Backend.Models;

namespace Web2Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrewController : Controller
    {
        private readonly ProjectContext _context;

        public CrewController(ProjectContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetCrew")]
        public ActionResult<IEnumerable<CrewModel>> GetCrew()
        {
            List<CrewModel> temp = new List<CrewModel>();
            foreach (var item in _context.CrewRequests)
            {
                if (item.Status == "valid")
                {
                    temp.Add(item);
                }
            }
            return temp;
        }

        [HttpPost]
        [Route("AddCrew")]
        public async Task<ActionResult<CrewModel>> SaveCrew(CrewModel crew)
        {
            CrewModel crew1 = new CrewModel()
            {
                Name = crew.Name,
                Id = crew.Id,
                CrewMembers = crew.CrewMembers,
                Status = crew.Status

            };



            _context.CrewRequests.Add(crew1);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCrew", crew1);

        }
        [HttpPut]
        [Route("DeleteCrew")]
        public async Task<ActionResult<CrewModel>> DeleteCrew(string id)
        {
            CrewModel c = new CrewModel();
            foreach (var item in _context.CrewRequests)
            {
                if (item.Id == id)
                {
                    c = item;
                    break;
                }
            }
            c.Status = "deleted";
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetCrew", c);


        }
    }
}
