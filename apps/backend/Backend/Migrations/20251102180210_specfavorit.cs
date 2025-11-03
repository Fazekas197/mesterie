using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class specfavorit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddUniqueConstraint(
                name: "AK_Meseriasi_Id",
                table: "Meseriasi",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "SpecizalizariMeseriasi",
                columns: table => new
                {
                    Id_meserias = table.Column<int>(type: "integer", nullable: false),
                    Id_specializare = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpecizalizariMeseriasi", x => new { x.Id_meserias, x.Id_specializare });
                    table.ForeignKey(
                        name: "FK_SpecizalizariMeseriasi_Meseriasi_Id_meserias",
                        column: x => x.Id_meserias,
                        principalTable: "Meseriasi",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SpecizalizariMeseriasi_Specializari_Id_specializare",
                        column: x => x.Id_specializare,
                        principalTable: "Specializari",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SpecizalizariMeseriasi_Id_specializare",
                table: "SpecizalizariMeseriasi",
                column: "Id_specializare");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SpecizalizariMeseriasi");

            migrationBuilder.DropUniqueConstraint(
                name: "AK_Meseriasi_Id",
                table: "Meseriasi");
        }
    }
}
