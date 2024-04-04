using ControleFinanceiro.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace ControleFinanceiro.Server.Context
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {

        }

        public DbSet<Despesa> Despesa { get; set; }
        public DbSet<Usuario> Usuario { get; set; } 
        public DbSet<TipoCategoria> TipoCategoria { get; set; } 
        public DbSet<TipoPagamento> TipoPagamento { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<TipoCategoria>(entity =>
            {
                entity.HasKey(a => a.Id);
                entity.Property(a => a.Nome)
                .IsRequired();
            }
       );

            modelBuilder.Entity<TipoPagamento>(entity =>
            {
                entity.HasKey(a => a.Id);
                entity.Property(a => a.Nome)
                .IsRequired();
            }
            );

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(a => a.Id);
                entity.Property(a => a.Nome)
                .IsRequired();
            }
              );

            modelBuilder.Entity<Despesa>(entity =>
                 {
                     entity.HasKey(a => a.Id);
                     entity.Property(a => a.Nome)
                     .IsRequired();

                     entity.HasOne(a => a.Usuario)
                        .WithMany(p => p.Despesas)
                        .HasForeignKey(a => a.UsuarioId)
                        .OnDelete(DeleteBehavior.NoAction);

                     entity.HasOne(a => a.TipoPagamento)
                       .WithMany(p => p.Despesas)
                       .HasForeignKey(a => a.TipoPagamentoId)
                       .OnDelete(DeleteBehavior.NoAction);

                     entity.HasOne(a => a.TipoPagamento)
                       .WithMany(p => p.Despesas)
                       .HasForeignKey(a => a.TipoPagamentoId)
                       .OnDelete(DeleteBehavior.NoAction);
                 }
                );
            

          

       


        
    }



    }
}
