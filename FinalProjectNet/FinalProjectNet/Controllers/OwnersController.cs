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
    public class OwnersController : ControllerBase
    {
        private readonly PostgresContext _context;

        public OwnersController(PostgresContext context)
        {
            _context = context;
        }

        // GET: api/Owners
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Owners>>> GetOwners()
        {
            return await _context.Owners.ToListAsync();
        }

        // GET: api/Owners/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Owners>> GetOwners(Guid id)
        {
            var owners = await _context.Owners.FindAsync(id);

            if (owners == null)
            {
                return NotFound();
            }

            return owners;
        }

        // PUT: api/Owners/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOwners(Guid id, Owners owners)
        {
            if (id != owners.Id)
            {
                return BadRequest();
            }

            _context.Entry(owners).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OwnersExists(id))
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

        // POST: api/Owners
        [HttpPost]
        public async Task<ActionResult<Owners>> PostOwners(Owners owners)
        {
            _context.Owners.Add(owners);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOwners", new { id = owners.Id }, owners);
        }

        // DELETE: api/Owners/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOwners(Guid id)
        {
            var owners = await _context.Owners.FindAsync(id);
            if (owners == null)
            {
                return NotFound();
            }

            _context.Owners.Remove(owners);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OwnersExists(Guid id)
        {
            return _context.Owners.Any(e => e.Id == id);
        }
    }
}
