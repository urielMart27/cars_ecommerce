using AutoMapper;
using FullStackAuth_WebAPI.ActionFilters;
using FullStackAuth_WebAPI.Contracts;
using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.DataTransferObjects;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CarController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/carDetails
        [HttpGet, Authorize]
        public IActionResult GetAllCars()
        {
            var cars = _context.Cars.ToList();
            return StatusCode(200, cars);
            
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult GetCarDetails(int id)
        {
            var car = _context.Cars.Find(id);
            if (car == null)
                {
                return NotFound();
            }
            return StatusCode(200, car);
        }
    }
  
}
