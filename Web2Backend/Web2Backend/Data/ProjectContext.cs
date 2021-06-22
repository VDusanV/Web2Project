using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Backend.Models;

namespace Web2Backend.Data
{
    public class ProjectContext : DbContext
    {

        public ProjectContext(DbContextOptions<ProjectContext> options) : base(options) { }


        public DbSet<UserModel> Users { get; set; }
        public DbSet<CallModel> Calls { get; set; }
        public DbSet<DeviceModel> Devices { get; set; }
        public DbSet<IncidentBasicInfoModel> IncidentBasicInfoModels { get; set; }
        public DbSet<ResolutionModel> Resolutions { get; set; }
        public DbSet<ElementModel> Elements { get; set; }
        public DbSet<NotificationsModel> Notifications { get; set; }
        public DbSet<StreetModel> Streets { get; set; }
        public DbSet<UserRequestModel> UserRequests { get; set; }
        public DbSet<CrewModel> CrewRequests { get; set; }
        public DbSet<SwitchingPlanModel> SwitchingPlans { get; set; }
        public DbSet<SwitchingPlanHistoryModel> SwitchingPlanHistory { get; set; }
        public DbSet<InstructionModel> Instructions { get; set; }
        public DbSet<ConsumerModel> Consumers { get; set; }
        public DbSet<SafetyDocumentModel> SafetyDocuments { get; set; }
        public DbSet<IncidentModel> Incidents { get; set; }


    }
}
