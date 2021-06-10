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
    public class ElementsController : ControllerBase
    {
        private readonly ProjectContext _context;
        public ElementsController(ProjectContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ElementModel>>> GetElements()
        {
            return await _context.Elements.ToListAsync();
        }

        [HttpPost]
        [Route("AddElement")]
        public async Task<ActionResult<ElementModel>> AddElement()
        {

            ElementModel element1 = new ElementModel()
            {
                Address = "Bul Cara Lazara 39",
                Coordinates = "39193",
                Type = "prekidac",
                Name = "PRE1"

            };

            _context.Elements.Add(element1);

            await _context.SaveChangesAsync();

            //SaveStreet("sdfsdf");

            return CreatedAtAction("GetElements", element1);

        }

        [HttpPost]
        [Route("SaveElement")]
        public async Task<ActionResult<ElementModel>> SaveElement(ElementModel element)
        {
            ElementModel element1 = new ElementModel()
            {
                Address = element.Address,
                Coordinates = element.Coordinates,
                Type = element.Type,
                Name = element.Name  //name podesiti da racuna koji je po redu ELEMENT i prva tri slova tog el na osnovu tipa

            };



            _context.Elements.Add(element1);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetElements", element1);

        }

        public async Task<ActionResult<string>> SaveStreet(string address)
        {
            char[] separators = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

            string streetName = address.Split(separators, 2)[0].Trim();

            List<ElementModel> lista = _context.Elements.ToList();


            /*List<string> streets = new List<string>();

            foreach (ElementModel element in lista)
            {
                string streetName = element.Address.Split(separators, 2)[0].Trim();
                Random rand = new Random();

                StreetModel street = new StreetModel
                {
                    Name = streetName,
                    dPriority = rand.Next(1, 6),
                    cPriority = rand.Next(1, 6)
                };



                if (!streets.Contains(streetName))
                {
                    _context.Streets.Add(street);
                }
                streets.Add(streetName);

            }

            await _context.SaveChangesAsync();*/

            return "ok";
        }



    }
}
