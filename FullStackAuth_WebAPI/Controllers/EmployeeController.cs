using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class EmployeeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EmployeeController(ApplicationDbContext context)
        {
            _context = context;
        }


        // GET api/<EmployeeController>/5
        [HttpGet("appointments")]
        public IActionResult GetUpcomingAppointments()
        {
            try
            {
                string userId = User.FindFirstValue("id");

                var upcomingAppointments = _context.Service
                    .Where(s => s.AssociatedCar.Owner.Id == userId && s.ServiceDate >= DateTime.Now && s.ServiceDate <= DateTime.Now.AddDays(7))
                    .Select(s => new
                    {
                        s.AssociatedCar.Owner.Id,
                        s.ServiceType,
                        s.ServiceDate,
                        AssociatedCar = new
                        {
                            s.AssociatedCar.Id,
                            s.AssociatedCar.Year,
                            s.AssociatedCar.Make,
                            s.AssociatedCar.Model
                        }

                    })
                    .ToList();
                return Ok(upcomingAppointments);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occured: {ex.Message}");
            }
        }


        // POST api/<EmployeeController>
        [HttpPost("addCar")]
        public IActionResult AddCar([FromBody] Car car)
        {
            _context.Cars.Add(car);
            _context.SaveChanges();
            return StatusCode(201, car);
        }


        //// POST api/<EmployeeController>
        //[HttpPost("addCar")]
        //public IActionResult RespondToMessage([FromBody] Message message)
        //{
          
        //}


        //// POST api/<EmployeeController>
        //[HttpPost("addCar")]
        //public IActionResult TransferCar([FromBody] Car car)
        //{
         
        //}
    }
}
