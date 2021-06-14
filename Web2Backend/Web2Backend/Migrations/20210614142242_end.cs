using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Backend.Migrations
{
    public partial class end : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ActiveStatus",
                table: "Users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "ActiveStatus",
                table: "Users",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
