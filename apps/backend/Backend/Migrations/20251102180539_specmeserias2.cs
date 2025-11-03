using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class specmeserias2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SpecizalizariMeseriasi_Meseriasi_Id_meserias",
                table: "SpecizalizariMeseriasi");

            migrationBuilder.DropForeignKey(
                name: "FK_SpecizalizariMeseriasi_Specializari_Id_specializare",
                table: "SpecizalizariMeseriasi");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SpecizalizariMeseriasi",
                table: "SpecizalizariMeseriasi");

            migrationBuilder.RenameTable(
                name: "SpecizalizariMeseriasi",
                newName: "SpecializariMeseriasi");

            migrationBuilder.RenameIndex(
                name: "IX_SpecizalizariMeseriasi_Id_specializare",
                table: "SpecializariMeseriasi",
                newName: "IX_SpecializariMeseriasi_Id_specializare");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SpecializariMeseriasi",
                table: "SpecializariMeseriasi",
                columns: new[] { "Id_meserias", "Id_specializare" });

            migrationBuilder.AddForeignKey(
                name: "FK_SpecializariMeseriasi_Meseriasi_Id_meserias",
                table: "SpecializariMeseriasi",
                column: "Id_meserias",
                principalTable: "Meseriasi",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SpecializariMeseriasi_Specializari_Id_specializare",
                table: "SpecializariMeseriasi",
                column: "Id_specializare",
                principalTable: "Specializari",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SpecializariMeseriasi_Meseriasi_Id_meserias",
                table: "SpecializariMeseriasi");

            migrationBuilder.DropForeignKey(
                name: "FK_SpecializariMeseriasi_Specializari_Id_specializare",
                table: "SpecializariMeseriasi");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SpecializariMeseriasi",
                table: "SpecializariMeseriasi");

            migrationBuilder.RenameTable(
                name: "SpecializariMeseriasi",
                newName: "SpecizalizariMeseriasi");

            migrationBuilder.RenameIndex(
                name: "IX_SpecializariMeseriasi_Id_specializare",
                table: "SpecizalizariMeseriasi",
                newName: "IX_SpecizalizariMeseriasi_Id_specializare");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SpecizalizariMeseriasi",
                table: "SpecizalizariMeseriasi",
                columns: new[] { "Id_meserias", "Id_specializare" });

            migrationBuilder.AddForeignKey(
                name: "FK_SpecizalizariMeseriasi_Meseriasi_Id_meserias",
                table: "SpecizalizariMeseriasi",
                column: "Id_meserias",
                principalTable: "Meseriasi",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SpecizalizariMeseriasi_Specializari_Id_specializare",
                table: "SpecizalizariMeseriasi",
                column: "Id_specializare",
                principalTable: "Specializari",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
