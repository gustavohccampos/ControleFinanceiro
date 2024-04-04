using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ControleFinanceiro.Server.Context;
using ControleFinanceiro.Server.Models;

namespace ControleFinanceiro.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoPagamentosController : ControllerBase
    {
        private readonly ApplicationContext _context;

        public TipoPagamentosController(ApplicationContext context)
        {
            _context = context;
        }

        // GET: api/TipoPagamentos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoPagamento>>> GetTipoPagamento()
        {
            return await _context.TipoPagamento.ToListAsync();
        }

        // GET: api/TipoPagamentos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoPagamento>> GetTipoPagamento(int id)
        {
            var tipoPagamento = await _context.TipoPagamento.FindAsync(id);

            if (tipoPagamento == null)
            {
                return NotFound();
            }

            return tipoPagamento;
        }

        // PUT: api/TipoPagamentos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoPagamento(int id, TipoPagamento tipoPagamento)
        {
            if (id != tipoPagamento.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoPagamento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoPagamentoExists(id))
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

        // POST: api/TipoPagamentos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoPagamento>> PostTipoPagamento(TipoPagamento tipoPagamento)
        {
            _context.TipoPagamento.Add(tipoPagamento);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoPagamento", new { id = tipoPagamento.Id }, tipoPagamento);
        }

        // DELETE: api/TipoPagamentos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoPagamento(int id)
        {
            var tipoPagamento = await _context.TipoPagamento.FindAsync(id);
            if (tipoPagamento == null)
            {
                return NotFound();
            }

            _context.TipoPagamento.Remove(tipoPagamento);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoPagamentoExists(int id)
        {
            return _context.TipoPagamento.Any(e => e.Id == id);
        }
    }
}
