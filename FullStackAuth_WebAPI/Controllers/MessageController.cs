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
    public class MessageController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MessageController(ApplicationDbContext context)
        {
            _context = context;
        }
   

        // GET api/<MessageController>/5
        [HttpGet]
        public IActionResult GetMessages()
        {
            try
            {
                string recipientId = User.FindFirstValue(ClaimTypes.NameIdentifier);

                var messages = _context.Messages
                    .Where(m => m.RecipientId == recipientId)
                    .Select(m => new
                    {
                        m.Id,
                        m.SenderId,
                        m.Subject,
                        m.Content
                    })
                    .ToList();

                return Ok(messages);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
           
        }

        // POST api/<MessageController>
        [HttpPost("add")]

        public IActionResult SendMessage([FromBody] Message message)
        {
            try
            {
                string senderId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                message.SenderId = senderId;

                if (_context.Users.Any(u => u.Id == message.RecipientId))
                {
                    _context.Messages.Add(message);
                    _context.SaveChanges();
                    return StatusCode(201, message);
                }
                else
                {
                    return BadRequest("Invalid Recipient");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occured: {ex.Message}");
            }
        }
 

        // PUT api/<MessageController>/5
        [HttpPut("{id}")]
       
        public IActionResult RespondToMessage(int id, [FromBody] Message response)
        {
            try
            {
                var originalMessage = _context.Messages.Find(id);

                if (originalMessage == null)
                {
                    return NotFound("Message not found.");
                }

                string senderId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                response.SenderId = senderId;

                originalMessage.Content += $"\n\nEmployee Response:\n{response.Content}";
                _context.SaveChanges();

                return Ok(originalMessage);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }

   
    }
}
