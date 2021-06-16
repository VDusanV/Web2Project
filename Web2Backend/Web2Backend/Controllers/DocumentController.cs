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
    public class DocumentController : ControllerBase
    {
        private readonly ProjectContext _context;
        public DocumentController(ProjectContext context)
        {
            _context = context;
        }





    }
}
