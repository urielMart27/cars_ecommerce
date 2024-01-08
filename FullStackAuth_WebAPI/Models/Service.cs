using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackAuth_WebAPI.Models
{
    public class Service
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string ServiceType { get; set; }

        [Required]
        public DateTime ServiceDate { get; set; }

        [ForeignKey("AssociatedCar")]
        public int AssociatedCarId { get; set; }
        public Car AssociatedCar { get; set; }
    }
}
