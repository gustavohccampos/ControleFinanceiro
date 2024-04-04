using ControleFinanceiro.Server.Models;

namespace ControleFinanceiro.Server.DTO
{
    public record struct UsuarioDto(
        string Nome,
        string Email,
        string Telefone,
        string Senha,
        DateTime DataCriacao,
        ICollection<Despesa> Despesa
        );
}
