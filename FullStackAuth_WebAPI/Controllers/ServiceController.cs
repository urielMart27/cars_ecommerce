using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServiceController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET api/<ServiceController>/5
        //[HttpGet("recommendations/{carId}")]
        ////public IActionResult GetServiceRecommendations(int carId)
        ////{
        ////    try currentMileage = _carService.GetCu
        ////} ADD GETCURRENTMILEAGE TO MODEL OR CONTROLLER SO IT CAN GIVE RECOMMENRDATION EVERY 5K MILES.


        // POST api/<ServiceController>
        [HttpPost]
        public IActionResult ScheduleService([FromBody] Service service)
        {
            try
            {

                //if (service== null || carId <=0)
                //{
                //    return BadRequest("Invalid Data.");
                //}

                //var car = _context.Cars.Find(carId);
                //if (car == null)
                //{
                //    return NotFound("Car not found.");
                //}

                _context.Service.Add(service);
                _context.SaveChanges();

                return StatusCode(201, service);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
      
        }

  
    }
}
