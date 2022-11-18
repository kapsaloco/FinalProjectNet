using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FinalProjectNet.Data;
using FinalProjectNet.Models;

namespace FinalProjectNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClaimsController : ControllerBase
    {
        private readonly PostgresContext _context;

        public ClaimsController(PostgresContext context)
        {
            _context = context;
        }

        // GET: api/Claims
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Claims>>> GetClaims()
        {
            return await _context.Claims.ToListAsync();
        }

        // GET: api/Claims/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Claims>> GetClaims(Guid id)
        {
            var claims = await _context.Claims.FindAsync(id);

            if (claims == null)
            {
                return NotFound();
            }

            return claims;
        }

        // PUT: api/Claims/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClaims(Guid id, Claims claims)
        {
            if (id != claims.Id)
            {
                return BadRequest();
            }

            _context.Entry(claims).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClaimsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Claims
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Claims>> PostClaims(Claims claims)
        {
            _context.Claims.Add(claims);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClaims", new { id = claims.Id }, claims);
        }

        // DELETE: api/Claims/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClaims(Guid id)
        {
            var claims = await _context.Claims.FindAsync(id);
            if (claims == null)
            {
                return NotFound();
            }

            _context.Claims.Remove(claims);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClaimsExists(Guid id)
        {
            return _context.Claims.Any(e => e.Id == id);
        }
    }
}
