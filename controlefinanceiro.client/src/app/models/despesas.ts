export interface Despesas
{
  id?:number,
  nome: string,
  descricao: string,
  valor: number,
  vencimento: string,
  repetirMensal: boolean,
  paga: boolean,
  usuarioId: number,
  tipoCategoriaId: number,
  tipoPagamentoId: number,
  dataCadastro: string,
  dataAlteracao: string
}
