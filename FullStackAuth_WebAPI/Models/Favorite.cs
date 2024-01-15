using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackAuth_WebAPI.Models
{
    public class Favorite
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
        public string ThumbnailUrl { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }
        public User User { get; set; }

       
    }
}
