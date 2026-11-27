using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Yamal.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class InitialPostgresMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Users_UserEntityId",
                table: "Questions");

            migrationBuilder.DropIndex(
                name: "IX_Questions_UserEntityId",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "Role",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserEntityId",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "user_name",
                table: "Questions");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "Users",
                type: "TEXT",
                maxLength: 20,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "UserEntityId",
                table: "Questions",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "user_name",
                table: "Questions",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Questions_UserEntityId",
                table: "Questions",
                column: "UserEntityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Users_UserEntityId",
                table: "Questions",
                column: "UserEntityId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
