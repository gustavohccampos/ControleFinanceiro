﻿using System;
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
    public class TipoCategoriasController : ControllerBase
    {
        private readonly ApplicationContext _context;

        public TipoCategoriasController(ApplicationContext context)
        {
            _context = context;
        }

        // GET: api/TipoCategorias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoCategoria>>> GetTipoCategoria()
        {
            return await _context.TipoCategoria.ToListAsync();
        }

        // GET: api/TipoCategorias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoCategoria>> GetTipoCategoria(int id)
        {
            var tipoCategoria = await _context.TipoCategoria.FindAsync(id);

            if (tipoCategoria == null)
            {
                return NotFound();
            }

            return tipoCategoria;
        }

        // PUT: api/TipoCategorias/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoCategoria(int id, TipoCategoria tipoCategoria)
        {
            if (id != tipoCategoria.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoCategoria).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoCategoriaExists(id))
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

        // POST: api/TipoCategorias
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoCategoria>> PostTipoCategoria(TipoCategoria tipoCategoria)
        {
            _context.TipoCategoria.Add(tipoCategoria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoCategoria", new { id = tipoCategoria.Id }, tipoCategoria);
        }

        // DELETE: api/TipoCategorias/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoCategoria(int id)
        {
            var tipoCategoria = await _context.TipoCategoria.FindAsync(id);
            if (tipoCategoria == null)
            {
                return NotFound();
            }

            _context.TipoCategoria.Remove(tipoCategoria);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoCategoriaExists(int id)
        {
            return _context.TipoCategoria.Any(e => e.Id == id);
        }
    }
}
