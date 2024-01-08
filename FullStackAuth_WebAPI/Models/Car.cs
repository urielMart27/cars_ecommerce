using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackAuth_WebAPI.Models
{
    public class Car
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Make { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public int Year { get; set; }

        [Required]
        public int Mileage { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public string ThumbnailUrl { get; set; }

        [ForeignKey("Owner")]
        public string? OwnertId { get; set; }
        public User? Owner { get; set; }

    }
}
