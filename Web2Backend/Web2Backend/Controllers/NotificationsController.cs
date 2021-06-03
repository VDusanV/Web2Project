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
                Type = "Info",
                Text = "Document Info",
                Status = "Unread",
                TimeStamp = DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss tt"),
                User = _context.Users.FirstOrDefault(u => u.Username == "admin")


            };

            _context.Notifications.Add(notification);

            await _context.SaveChangesAsync();

            return CreatedAtAction("AddNotification", notification);

        }

        [HttpPost]
        [Route("CreateNotification")]
        public async Task<ActionResult<ElementModel>> CreateNotification(NotificationsModel model)
        {

            string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

            NotificationsModel notification = new NotificationsModel()
            {
                Type = model.Type,
                Text = model.Text,
                Status = model.Status,
                TimeStamp = model.TimeStamp,
                User = _context.Users.FirstOrDefault(u => u.Username == username)


            };

            _context.Notifications.Add(notification);

            await _context.SaveChangesAsync();

            return CreatedAtAction("AddNotification", notification);

        }

        [HttpPut]
        [Route("ModifyNotification")]
        public async Task<ActionResult<ElementModel>> ModifyNotification(long id)
        {


            var notification = _context.Notifications.FirstOrDefault(n => n.Id == id);

            notification.Status = "Read";

            await _context.SaveChangesAsync();

            return CreatedAtAction("AddNotification", notification);

        }



    }
}
