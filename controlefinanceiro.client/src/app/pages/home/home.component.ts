import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirDespesaComponent } from 'src/app/componentes/excluir-despesa/excluir-despesa.component';
import { Despesas } from 'src/app/models/Despesas';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})



export class HomeComponent implements OnInit {

  despesas:Despesas[] = [];
  despesasGeral: Despesas[] = [];

  constructor(private despesasService:DespesasService, public matDialog: MatDialog)
  {

  }

  ngOnInit(): void {
    this.despesasService.GetDespesas().subscribe(dadosApi =>{
     // console.log(dadosApi)

      dadosApi.map((item) =>
      {
       // console.log(item)

        item.dataCadastro = new Date(item.dataCadastro!).toLocaleDateString('pt-BR')
        item.vencimento = new Date(item.vencimento!).toLocaleDateString('pt-BR')

       // console.log(dadosApi)
      })

      this.despesas = dadosApi;
      this.despesasGeral = dadosApi;

    });
  }


  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
        //console.log(value)

  this.despesas = this.despesasGeral.filter(despesa => {
    return despesa.nome.toLowerCase().includes(value);
  })

  }


  openDialog(id : number){
    this.matDialog.open(ExcluirDespesaComponent,{
      width: '350px',
      height: '350px',
      data: {
        id: id
      }
    })
  }

}

