using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Backend.Models;
using Web2Backend.Models.FormModels;
using Web2Backend.Data;
using Microsoft.EntityFrameworkCore;

namespace Web2Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingsController : ControllerBase
    {

        private readonly ProjectContext _context;
        public SettingsController(ProjectContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetStreets")]
        public async Task<ActionResult<IEnumerable<StreetModel>>> GetStreets()
        {
            return await _context.Streets.ToListAsync();
        }

        [HttpPut]
        [Route("ChangePriority")]
        public async Task<ActionResult<StreetModel>> ChangePriority(StreetModel cp)
        {
            var street1 = new StreetModel();
            bool success = false;

            foreach (StreetModel street in _context.Streets)
            {
                if(street.Name == cp.Name)
                {
                    street1 = _context.Streets.FirstOrDefault(s => s.Name == cp.Name);
                    street1.cPriority = cp.cPriority;
                    success = true;
                    break;
                }
            }

            if (success)
            {
                await _context.SaveChangesAsync();
                return CreatedAtAction("ChangePriority", street1);
            }

            return BadRequest("Wrong street name");

        }

        [HttpPut]
        [Route("ResetPriority")]
        public async Task<ActionResult<StreetModel>> ResetPriority()
        {
            var street1 = new StreetModel();

            foreach (StreetModel street in _context.Streets)
            {
                street1 = street;
                street1.cPriority = street1.dPriority;
            }

          
            await _context.SaveChangesAsync();
            return CreatedAtAction("ResetPriority", street1);
            

        }




    }
}
