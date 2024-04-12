import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Despesas } from 'src/app/models/Despesas';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-detalhes-despesa',
  templateUrl: './detalhes-despesa.component.html',
  styleUrls: ['./detalhes-despesa.component.css']
})

export class DetalhesDespesaComponent implements OnInit {
  btnTitulo = "Detalhes Despesa";

  despesa?:Despesas;

  constructor(private despesaService:DespesasService, private route:ActivatedRoute,private router:Router)
  {

  }
  ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.despesaService.GetDespesaId(id).subscribe((data)=>{

      const dados = data;
      dados.vencimento = new Date(data.vencimento!).toLocaleDateString('pt-BR');
      dados.dataCadastro = new Date(data.dataCadastro!).toLocaleDateString('pt-BR');
      dados.dataAlteracao = new Date(data.dataAlteracao!).toLocaleDateString('pt-BR');

      this.despesa=dados;

    })

  }

}

