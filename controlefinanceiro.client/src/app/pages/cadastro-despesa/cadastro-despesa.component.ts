import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Despesas } from 'src/app/models/Despesas';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-cadastro-despesa',
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.css']
})
export class CadastroDespesaComponent {
  btnAcao = "Cadastrar";
  btnTitulo = "Cadastrar Despesa";

constructor (private despesaService : DespesasService, private router: Router)
{

}


createDespesa(despesa: Despesas){
  this.despesaService.PostDespesa(despesa).subscribe((data) => {
    //console.log(data)
    this.router.navigate(['/']);
  })
}

}
