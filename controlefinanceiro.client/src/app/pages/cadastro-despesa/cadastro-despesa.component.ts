import { Component } from '@angular/core';
import { Despesas } from 'src/app/models/Despesas';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-cadastro-despesa',
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.css']
})
export class CadastroDespesaComponent {

constructor (private despesaService : DespesasService)
{

}



createDespesa(despesa: Despesas){
  this.despesaService.PostDespesa(despesa).subscribe((data) => {
    console.log(data)
  })
}

}
