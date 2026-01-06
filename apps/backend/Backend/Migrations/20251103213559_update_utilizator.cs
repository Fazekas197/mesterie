using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class update_utilizator : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rol",
                table: "Utilizatori");

            migrationBuilder.AddColumn<bool>(
                name: "EsteMeserias",
                table: "Utilizatori",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EsteMeserias",
                table: "Utilizatori");

            migrationBuilder.AddColumn<string>(
                name: "Rol",
                table: "Utilizatori",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
