using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace data_access.Migrations
{
    /// <inheritdoc />
    public partial class TestMigration20231109 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Trransaction",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Create_User = table.Column<string>(type: "TEXT", nullable: false),
                    Created_Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Transaction_Type = table.Column<string>(type: "TEXT", nullable: false),
                    Amount_USD = table.Column<decimal>(type: "TEXT", nullable: false),
                    Exchange_Rate = table.Column<decimal>(type: "TEXT", nullable: false),
                    Amount_PHP = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trransaction", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Trransaction");
        }
    }
}
