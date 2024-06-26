import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Despesas } from 'src/app/models/Despesas';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-editar-despesa',
  templateUrl: './editar-despesa.component.html',
  styleUrls: ['./editar-despesa.component.css']
})
export class EditarDespesaComponent implements
OnInit{
  btnAcao = "Editar";
  btnTitulo = "Editar Despesa";
  despesa!: Despesas;
  dataCad= Date();
  dataAlt = Date.now;

  constructor (private despesaService : DespesasService, private route: ActivatedRoute, private router:Router)
  {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.despesaService.GetDespesaId(id).subscribe((data) => {
      //console.log(data);
      this.despesa = data;
      this.dataCad = data.dataCadastro;

    })
  }

  editarDespesa(despesa : Despesas)
  {
    despesa.dataCadastro = this.dataCad;
    despesa.dataAlteracao =new Date().toISOString();

    console.log(despesa);
    const id = Number(this.route.snapshot.paramMap.get('id'));
      this.despesaService.PutDespesa(id,despesa).subscribe(data=>{
       // console.log(despesa);
       this.router.navigate(["/"]);
      })
  }
}



