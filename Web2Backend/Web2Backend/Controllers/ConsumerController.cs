using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class ConsumerController : ControllerBase
    {
        private readonly ProjectContext _context;
        public ConsumerController(ProjectContext context)
        {
            _context = context;
        }


        [HttpGet]
        [Route("GetConsumers")]
        //[Authorize(Roles = "Admin")]
        public async Task<ActionResult<IEnumerable<ConsumerModel>>> GetConsumers()
        {
            List<ConsumerModel> consumers = new List<ConsumerModel>();

            foreach (ConsumerModel cons in _context.Consumers)
            {
                if (cons.Deleted == false)
                {
                    consumers.Add(cons);
                }
            }

            return consumers;
        }


        [HttpPost]
        [Route("SaveConsumer")]
        public async Task<ActionResult<ConsumerModel>> SaveConsumer(ConsumerModel consumer)
        {
            ConsumerModel cons = new ConsumerModel
            {
                Name = consumer.Name,
                Surname = consumer.Surname,
                Street = consumer.Street,
                City = consumer.City,
                Postal = consumer.Postal,
                Phone = consumer.Phone,
                Type = consumer.Type
            };


            _context.Consumers.Add(cons);


            await _context.SaveChangesAsync();

            return CreatedAtAction("SaveConsumer", cons);

        }

        [HttpPut]
        [Route("ModifyConsumer")]
        public async Task<ActionResult<ConsumerModel>> ModifyConsumer(ConsumerModel consumer)
        {

            ConsumerModel con = new ConsumerModel();
            foreach (ConsumerModel cons in _context.Consumers)
            {
                if (cons.Id == consumer.Id)
                {
                    con = cons;
                    break;
                }
            }

            con.Name = consumer.Name;
            con.Surname = consumer.Surname;
            con.Street = consumer.Street;
            con.City = consumer.City;
            con.Postal = consumer.Postal;
            con.Phone = consumer.Phone;



            await _context.SaveChangesAsync();

            return CreatedAtAction("ModifyConsumer", con);

        }


        [HttpPut]
        [Route("DeleteConsumer")]
        public async Task<ActionResult<ConsumerModel>> DeleteConsumer([FromBody] long id)
        {

            ConsumerModel con = new ConsumerModel();
            foreach (ConsumerModel cons in _context.Consumers)
            {
                if (cons.Id == id)
                {
                    con = cons;
                    break;
                }
            }

            con.Deleted = true;


            await _context.SaveChangesAsync();

            return CreatedAtAction("DeleteConsumer", con);

        }


        [HttpGet]
        [Route("GetConsumer")]
        public async Task<ActionResult<ConsumerModel>> GetConsumer(long id)
        {
            ConsumerModel consumer = new ConsumerModel();

            foreach (ConsumerModel cons in _context.Consumers)
            {
                if (cons.Id == id)
                {
                    consumer = cons;
                }
            }

            return consumer;
        }






    }
}
