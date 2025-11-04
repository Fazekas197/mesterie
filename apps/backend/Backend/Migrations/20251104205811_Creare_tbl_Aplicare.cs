using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class Creare_tbl_Aplicare : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Aplicari",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Id_Oferta = table.Column<int>(type: "integer", nullable: false),
                    Id_Meserias = table.Column<int>(type: "integer", nullable: false),
                    Mesaj = table.Column<string>(type: "text", nullable: false),
                    Created_at = table.Column<DateOnly>(type: "date", nullable: false),
                    Status = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aplicari", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Aplicari_Meseriasi_Id_Meserias",
                        column: x => x.Id_Meserias,
                        principalTable: "Meseriasi",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Aplicari_Oferte_Id_Oferta",
                        column: x => x.Id_Oferta,
                        principalTable: "Oferte",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Aplicari_Id_Meserias",
                table: "Aplicari",
                column: "Id_Meserias");

            migrationBuilder.CreateIndex(
                name: "IX_Aplicari_Id_Oferta",
                table: "Aplicari",
                column: "Id_Oferta");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Aplicari");
        }
    }
}
