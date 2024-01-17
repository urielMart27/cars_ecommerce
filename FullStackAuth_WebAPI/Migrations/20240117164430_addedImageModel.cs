using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FullStackAuth_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class addedImageModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "304fff50-f0bd-4c11-9250-07a9d320e6fd");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7d391df4-2214-4ed0-93bd-b01ce078a6aa");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "44b6e204-5e7b-4a15-863b-c92ed0236d6c", null, "User", "USER" },
                    { "4a73a4ff-c700-42bd-8b07-20bdb4d56436", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "44b6e204-5e7b-4a15-863b-c92ed0236d6c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4a73a4ff-c700-42bd-8b07-20bdb4d56436");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "304fff50-f0bd-4c11-9250-07a9d320e6fd", null, "User", "USER" },
                    { "7d391df4-2214-4ed0-93bd-b01ce078a6aa", null, "Admin", "ADMIN" }
                });
        }
    }
}
