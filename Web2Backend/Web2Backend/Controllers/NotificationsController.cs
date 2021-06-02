using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Backend.Data;
using Web2Backend.Models;
using System.Security.Claims;

namespace Web2Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        private readonly ProjectContext _context;

        public NotificationsController(ProjectContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<NotificationsModel>>> GetElements()
        {
            return await _context.Notifications.ToListAsync();
        }

        [HttpPost]
        [Route("AddNotification")]
        public async Task<ActionResult<ElementModel>> AddNotification()
        {

            //string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

            NotificationsModel notification = new NotificationsModel()
            {
                Type = "Success",
                Text = "Save successful",
                Status = "Unread",
                TimeStamp = DateTime.Now,
                User = _context.Users.FirstOrDefault(u => u.Username == "admin")


            };

            _context.Notifications.Add(notification);

            await _context.SaveChangesAsync();

            return CreatedAtAction("AddNotification", notification);

        }

    }
}
