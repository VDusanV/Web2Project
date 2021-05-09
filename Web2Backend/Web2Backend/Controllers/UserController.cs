using Microsoft.AspNetCore.Http;
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
    public class UserController : ControllerBase
    {
        private readonly ProjectContext _context;

        public UserController(ProjectContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserModel>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpPost]
        [Route("AddUser")]
        public async Task<ActionResult<UserModel>> AddUser()
        {

            UserModel user1 = new UserModel() { Username = "admin2", Password = "admin2", Address = "Bulevar Cara Lazara 88", 
                                                BirthDate = new DateTime(1990, 7, 11), ImageData = new byte[5], NameAndLastname = "Radoslav Markovic" };

            _context.Users.Add(user1);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsers", user1);

        }




    }
}
