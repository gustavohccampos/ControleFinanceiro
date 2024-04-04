using ControleFinanceiro.Server.Models;

namespace ControleFinanceiro.Server.DTO
{
    public record struct DespesaDto (
        string Nome,
        string Descricao,
        double Valor,
        DateTime Vencimento,
        bool RepetirMensal,
        DateTime DataCadastro,
        UsuarioDto Usuario,
        TipoCategoriaDto TipoCategoria,
        TipoPagamentoDto TipoPagamento
        );

}
