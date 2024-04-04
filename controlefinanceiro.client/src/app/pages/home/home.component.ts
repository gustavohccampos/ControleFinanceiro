import { Component, OnInit } from '@angular/core';
import { despesas } from 'src/app/models/despesas';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})



export class HomeComponent implements OnInit {

  despesas:despesas[] = [];
  despesasGeral: despesas[] = [];

  constructor(private despesasService:DespesasService)
  {

  }

  ngOnInit(): void {
    this.despesasService.GetDespesas().subscribe(dadosApi =>{
      console.log(dadosApi)

      dadosApi.map((item) =>
      {
        console.log(item)

        item.dataCadastro = new Date(item.dataCadastro!).toLocaleDateString('pt-BR')
        item.vencimento = new Date(item.vencimento!).toLocaleDateString('pt-BR')

        console.log(dadosApi)
      })

      this.despesas = dadosApi;
      this.despesasGeral = dadosApi;

    });


  }

}

