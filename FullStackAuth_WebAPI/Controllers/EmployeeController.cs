using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Mvc;

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
        [HttpGet("{id}")]
        public string GetNextWeekAppointments(int id)
        {
            return "value";
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
