using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class meseriasi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Meseriasi",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false),
                    Id_user = table.Column<int>(type: "integer", nullable: false),
                    Id_Judet = table.Column<int>(type: "integer", nullable: false),
                    Desc = table.Column<string>(type: "text", nullable: false),
                    Experienta = table.Column<int>(type: "integer", nullable: false),
                    Pret_start = table.Column<float>(type: "real", nullable: false),
                    Disponibilitate = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Meseriasi", x => new { x.Id, x.Id_user });
                    table.ForeignKey(
                        name: "FK_Meseriasi_Judete_Id_Judet",
                        column: x => x.Id_Judet,
                        principalTable: "Judete",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Meseriasi_Utilizatori_Id_user",
                        column: x => x.Id_user,
                        principalTable: "Utilizatori",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Meseriasi_Id_Judet",
                table: "Meseriasi",
                column: "Id_Judet");

            migrationBuilder.CreateIndex(
                name: "IX_Meseriasi_Id_user",
                table: "Meseriasi",
                column: "Id_user");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Meseriasi");
        }
    }
}
