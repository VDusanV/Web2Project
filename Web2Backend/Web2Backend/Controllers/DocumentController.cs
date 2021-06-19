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
    public class DocumentController : ControllerBase
    {
        private readonly ProjectContext _context;
        public DocumentController(ProjectContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("SaveSwitchingPlan")]
        public async Task<ActionResult<SwitchingPlanModel>> SaveSwitchingPlan(SwitchingPlanModel switchingPlan)
        {

            SwitchingPlanModel sp = new SwitchingPlanModel
            {
                Type = switchingPlan.Type,
                WorkRequest = switchingPlan.WorkRequest,
                Status = switchingPlan.Status,
                Incident = switchingPlan.Incident,
                Street = switchingPlan.Street,
                startDate = switchingPlan.startDate,
                endDate = switchingPlan.endDate,
                Crew = switchingPlan.Crew,
                CreatedBy = switchingPlan.CreatedBy,
                Notes = switchingPlan.Notes,
                Company = switchingPlan.Company,
                Phone = switchingPlan.Phone,
                DateCreated = switchingPlan.DateCreated,
                ImageData = switchingPlan.ImageData,
                Equipment = switchingPlan.Equipment,

            };

            _context.SwitchingPlans.Add(sp);


            await _context.SaveChangesAsync();

            return CreatedAtAction("SaveSwitchingPlan", sp);

        }

        [HttpGet]
        [Route("GetSwitchingPlans")]
        public async Task<ActionResult<IEnumerable<SwitchingPlanModel>>> GetSwitchingPlans()
        {
            return await _context.SwitchingPlans.ToListAsync();
        }

        [HttpGet]
        [Route("GetSwitchingPlan")]
        public async Task<ActionResult<SwitchingPlanModel>> GetSwitchingPlan(long id)
        {
            SwitchingPlanModel swp = new SwitchingPlanModel();

            foreach (SwitchingPlanModel sw in _context.SwitchingPlans)
            {
                if (sw.Id == id)
                {
                    swp = sw;
                    return swp;
                }
            }

            return BadRequest();
        }


        [HttpPost]
        [Route("SaveInstruction")]
        public async Task<ActionResult<InstructionModel>> SaveInstruction(InstructionModel instruction)
        {
            InstructionModel ins = new InstructionModel
            {
                DocumentId = instruction.DocumentId,
                Action = instruction.Action,
                Element = instruction.Element,
                Executed = false,
                Deleted = false
            };


            _context.Instructions.Add(ins);


            await _context.SaveChangesAsync();

            return CreatedAtAction("SaveInstruction", ins);

        }

        [HttpGet]
        [Route("GetInstructions")]
        public async Task<ActionResult<IEnumerable<InstructionModel>>> GetInstructions()
        {
            List<InstructionModel> instructions = new List<InstructionModel>();

            foreach (InstructionModel ins in _context.Instructions)
            {
                if (ins.Deleted == false)
                {
                    instructions.Add(ins);
                }
            }


            return instructions;
        }

        [HttpGet]
        [Route("GetDocumentInstruction")]
        public async Task<ActionResult<IEnumerable<InstructionModel>>> GetDocumentInstruction(long id)
        {
            List<InstructionModel> ins = new List<InstructionModel>();

            foreach (InstructionModel i in _context.Instructions)
            {
                if (i.DocumentId == id)
                {
                    ins.Add(i);
                }
            }

            return ins;
        }

        [HttpPut]
        [Route("ExecuteInstruction")]
        public async Task<ActionResult<InstructionModel>> ExecuteInstruction([FromBody] long id)
        {
            InstructionModel ins = new InstructionModel();

            foreach (InstructionModel i in _context.Instructions)
            {
                if (i.Id == id)
                {
                    ins = i;
                    break;
                }
            }

            ins.Executed = true;

            await _context.SaveChangesAsync();

            return CreatedAtAction("ExecuteInstruction", ins);

        }

        [HttpPut]
        [Route("DeleteInstruction")]
        public async Task<ActionResult<InstructionModel>> DeleteInstruction([FromBody] long id)
        {
            InstructionModel ins = new InstructionModel();

            foreach (InstructionModel i in _context.Instructions)
            {
                if (i.Id == id)
                {
                    ins = i;
                    break;
                }
            }

            ins.Deleted = true;

            await _context.SaveChangesAsync();

            return CreatedAtAction("ExecuteInstruction", ins);

        }

        [HttpPut]
        [Route("DeleteAllInstructions")]
        public async Task<ActionResult<InstructionModel>> DeleteAllInstructions([FromBody] long id)
        {
            InstructionModel ins = new InstructionModel();

            foreach (InstructionModel i in _context.Instructions)
            {
                if (i.DocumentId == id)
                {
                    ins = i;
                    ins.Deleted = true;
                }
            }


            await _context.SaveChangesAsync();

            return CreatedAtAction("ExecuteInstruction", ins);

        }

        [HttpGet]
        [Route("GetHistoryState")]
        public async Task<ActionResult<IEnumerable<SwitchingPlanHistoryModel>>> GetHistoryState(long id)
        {
            List<SwitchingPlanHistoryModel> ins = new List<SwitchingPlanHistoryModel>();

            foreach (SwitchingPlanHistoryModel i in _context.SwitchingPlanHistory)
            {
                if (i.DocumentId == id)
                {
                    ins.Add(i);
                }
            }

            return ins;
        }

        [HttpPost]
        [Route("SaveHistoryState")]
        public async Task<ActionResult<SwitchingPlanHistoryModel>> SaveHistoryState(SwitchingPlanHistoryModel hisState)
        {
            SwitchingPlanHistoryModel ins = new SwitchingPlanHistoryModel
            {
                DocumentId = hisState.DocumentId,
                ChangeBy = hisState.ChangeBy,
                DateChange = DateTime.Now.ToString(),
                NewStatus = hisState.NewStatus
            };


            SwitchingPlanModel doc = new SwitchingPlanModel();
            foreach (SwitchingPlanModel swp in _context.SwitchingPlans)
            {
                if (swp.Id == hisState.DocumentId)
                {
                    doc = swp;
                    doc.Status = hisState.NewStatus;
                    break;
                }
            }


            _context.SwitchingPlanHistory.Add(ins);


            await _context.SaveChangesAsync();

            return CreatedAtAction("SaveHistoryState", ins);

        }

    }
}
