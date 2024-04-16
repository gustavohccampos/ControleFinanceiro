import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Despesas } from 'src/app/models/Despesas';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-excluir-despesa',
  templateUrl: './excluir-despesa.component.html',
  styleUrls: ['./excluir-despesa.component.css']
})
export class ExcluirDespesaComponent implements OnInit
{

  inputData:any;
  despesa!:Despesas;

  constructor(
    private DespesasService:DespesasService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private ref:MatDialogRef<ExcluirDespesaComponent>
    ) {


  }
  ngOnInit(): void {

    this.inputData = this.data;
    this.DespesasService.
    GetDespesaId(this.inputData.id).subscribe((data)=>{
      this.despesa = data;
     // console.log(this.despesa)
    })
  }

  Excluir(){
    this.DespesasService.DeleteDespesa(this.inputData.id).subscribe((data)=>{

      this.ref.close();
      window.location.reload();
    })
  }

  Cancelar(){
    this.ref.close();
  }
}
