using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class oferta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Oferte",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Id_user = table.Column<int>(type: "integer", nullable: false),
                    Id_judet = table.Column<int>(type: "integer", nullable: false),
                    Titlu = table.Column<string>(type: "text", nullable: false),
                    Desc = table.Column<string>(type: "text", nullable: false),
                    Id_specializare = table.Column<int>(type: "integer", nullable: false),
                    Buget = table.Column<float>(type: "real", nullable: false),
                    Created_at = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Oferte", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Oferte_Judete_Id_judet",
                        column: x => x.Id_judet,
                        principalTable: "Judete",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Oferte_Specializari_Id_specializare",
                        column: x => x.Id_specializare,
                        principalTable: "Specializari",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Oferte_Utilizatori_Id_user",
                        column: x => x.Id_user,
                        principalTable: "Utilizatori",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Oferte_Id_judet",
                table: "Oferte",
                column: "Id_judet");

            migrationBuilder.CreateIndex(
                name: "IX_Oferte_Id_specializare",
                table: "Oferte",
                column: "Id_specializare");

            migrationBuilder.CreateIndex(
                name: "IX_Oferte_Id_user",
                table: "Oferte",
                column: "Id_user");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Oferte");
        }
    }
}
