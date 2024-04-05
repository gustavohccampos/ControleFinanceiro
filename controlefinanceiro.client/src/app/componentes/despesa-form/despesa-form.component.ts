import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Despesas} from 'src/app/models/Despesas'

@Component({
  selector: 'app-despesa-form',
  templateUrl: './despesa-form.component.html',
  styleUrls: ['./despesa-form.component.css']
})
export class DespesaFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Despesas>();

  despesaForm!: FormGroup;

  constructor(){


  }


  ngOnInit():void{

    this.despesaForm = new FormGroup({
        id:new FormControl(0),
        nome:new FormControl(''),
        descricao:new FormControl(''),
        valor:new FormControl(''),
        vencimento:new FormControl(''),
        repetirMensal:new FormControl(''),
        paga:new FormControl(''),
        usuarioId:new FormControl(''),
        tipoCategoriaId:new FormControl(''),
        tipoPagamentoId:new FormControl(''),
        dataCadastro:new FormControl(new Date()),
        dataAlteracao:new FormControl(new Date())
    });
  }

  submit(){
    //console.log(this.despesaForm.value);
    this.onSubmit.emit(this.despesaForm.value);

  }

}
