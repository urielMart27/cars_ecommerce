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
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }
      
        // GET api/<UserController>/5
        [HttpGet("favorites"),Authorize]
        public IActionResult GetFavorites()
        {
            string userId = User.FindFirstValue("id");
            var favorites = _context.Favorites.Where(f => f.UserId.Equals(userId));
            return StatusCode(200, favorites);
        }


        // POST api/<UserController>
        [HttpPost("favorites"), Authorize]
        public IActionResult AddToFavorites([FromBody] Favorite favorite)
        {
            try
            {
                string userId = User.FindFirstValue("id");
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized();
                }

                favorite.UserId = userId;

                _context.Favorites.Add(favorite);
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                _context.SaveChanges();
                return StatusCode(201, favorite);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

   
    }
}
