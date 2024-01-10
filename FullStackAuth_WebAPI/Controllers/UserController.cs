using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }
      
        // GET api/<UserController>/5
        [HttpGet("{userId}/favorites")]
        public IActionResult GetFavorites(int userId)
        {
            var favorites = _context.Favorites.ToList();
            return StatusCode(200, favorites);
        }


        // POST api/<UserController>
        [HttpPost("{userId}/favorites")]
        public IActionResult AddToFavorites([FromBody] Favorite favorite)
        {
            _context.Favorites.Add(favorite);
            _context.SaveChanges();
            return StatusCode(201, favorite);
        }

   
    }
}
