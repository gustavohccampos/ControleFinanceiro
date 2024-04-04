using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ControleFinanceiro.Server.Models
{
    public class TipoCategoria
    {
        [Key]
        public int Id { get; set; }
        public string? Nome { get; set; }

        [JsonIgnore]
        public ICollection<Despesa>? Despesas { get; set; }

    }
}
