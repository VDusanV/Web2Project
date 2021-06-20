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
    public class SafetyDocumentsController : ControllerBase
    {
        private readonly ProjectContext _context;
        public SafetyDocumentsController(ProjectContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SafetyDocumentModel>>> GetSafetyDocuments()
        {
            return await _context.SafetyDocuments.ToListAsync();
        }

        [HttpPost]
        [Route("AddSafetyDocument")]
        public async Task<ActionResult<SafetyDocumentModel>> AddSafetyDocument(SafetyDocumentModel safeDoc)
        {

            /*ElementModel element1 = new ElementModel()
            {
                Address = "Bul Cara Lazara 39",
                Coordinates = "39193",
                Type = "prekidac",
                Name = "PRE1"

            };*/
            SafetyDocumentModel sd = new SafetyDocumentModel()
            {
                Type = safeDoc.Type,
                Status = safeDoc.Status,
                SwitchingPlan = safeDoc.Status,
                SafetyDocType = "", //ne pise u spec sta je
                DateCreated = DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss tt"),
                CreatedBy = safeDoc.CreatedBy,
                PhoneNum = safeDoc.PhoneNum,
                FieldCrew = safeDoc.FieldCrew,
                Details = safeDoc.Details,
                Notes = safeDoc.Notes,
                newState = safeDoc.newState,
                UsersThatChangedDocument = safeDoc.UsersThatChangedDocument,
                File = safeDoc.File,
                DevicesSelected = safeDoc.DevicesSelected,
                OperationsCompleted = safeDoc.OperationsCompleted,
                TagsRemoved = safeDoc.TagsRemoved,
                GroundingRemoved = safeDoc.GroundingRemoved,
                ReadyForService = safeDoc.ReadyForService


            };




            _context.SafetyDocuments.Add(sd);

            await _context.SaveChangesAsync();

            //SaveStreet("sdfsdf");

            return CreatedAtAction("GetSafetyDocuments", sd);

        }

    }
}
