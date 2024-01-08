using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackAuth_WebAPI.Models
{
    public class Sale
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Buyer")]
        public string BuyertId { get; set; }
        public User Buyer { get; set; }

        [ForeignKey("Seller")]
        public string SellerId { get; set; }
        public User Seller { get; set; }

        [ForeignKey("SoldCar")]
        public int SoldCarId { get; set; }
        public Car SoldCar { get; set; }
    }
}
