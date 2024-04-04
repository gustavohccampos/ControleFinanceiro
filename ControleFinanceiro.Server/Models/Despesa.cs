

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ControleFinanceiro.Server.Models
{
    public class Despesa
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public double Valor { get; set; }
        public DateTime Vencimento { get; set; }
        public bool RepetirMensal { get; set; }
        public bool Paga { get; set; }

        [ForeignKey("Usuario")]
        public int UsuarioId { get; set; }

        [JsonIgnore]
        public Usuario? Usuario { get; set; }

        [ForeignKey("TipoCategoria")]
        public int TipoCategoriaId { get; set; }

        [JsonIgnore]
        public TipoCategoria? TipoCategoria { get; set; }

        [ForeignKey("TipoPagamento")]
        public int TipoPagamentoId { get; set; }

        [JsonIgnore]
        public TipoPagamento? TipoPagamento { get; set; }



        public DateTime DataCadastro { get; set; } = DateTime.Now;

    }
}
