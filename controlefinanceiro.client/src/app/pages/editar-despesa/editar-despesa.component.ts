import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor (private despesaService : DespesasService, private router: ActivatedRoute)
  {

  }

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));

    this.despesaService.GetDespesaId(id).subscribe((data) => {

      //console.log(data);
      this.despesa = data;

    })
  }
}



