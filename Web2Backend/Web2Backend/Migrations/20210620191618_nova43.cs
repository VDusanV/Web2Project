using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Backend.Migrations
{
    public partial class nova43 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            

            /*migrationBuilder.CreateTable(
                name: "SafetyDocuments",
                columns: table => new
                {
                    SafetyDocumentId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SwitchingPlan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SafetyDocType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateCreated = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNum = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FieldCrew = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    newState = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsersThatChangedDocument = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    File = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DevicesSelected = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OperationsCompleted = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TagsRemoved = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GroundingRemoved = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReadyForService = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SafetyDocuments", x => x.SafetyDocumentId);
                });

            */
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
