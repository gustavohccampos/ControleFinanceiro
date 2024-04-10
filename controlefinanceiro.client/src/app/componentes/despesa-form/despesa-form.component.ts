import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Despesas} from 'src/app/models/Despesas'

@Component({
  selector: 'app-despesa-form',
  templateUrl: './despesa-form.component.html',
  styleUrls: ['./despesa-form.component.css']
})
export class DespesaFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Despesas>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosDespesa: Despesas | null=null;

  despesaForm!: FormGroup;


  constructor(){
  }


  ngOnInit():void{

    console.log(this.dadosDespesa)

    this.despesaForm = new FormGroup({
        id:new FormControl(0),
        nome:new FormControl(this.dadosDespesa ? this.dadosDespesa.nome:'',[Validators.required]),
        descricao:new FormControl(this.dadosDespesa ? this.dadosDespesa.descricao:''),
        valor:new FormControl(this.dadosDespesa ? this.dadosDespesa.valor:'',[Validators.required]),
        vencimento:new FormControl(this.dadosDespesa ? this.dadosDespesa.vencimento:'',[Validators.required]),
        repetirMensal:new FormControl(this.dadosDespesa ? this.dadosDespesa.repetirMensal:false),
        paga:new FormControl(this.dadosDespesa ? this.dadosDespesa.paga:false),
        usuarioId:new FormControl(this.dadosDespesa ? this.dadosDespesa.usuarioId:'',[Validators.required]),
        tipoCategoriaId:new FormControl(this.dadosDespesa ? this.dadosDespesa.tipoCategoriaId:'',[Validators.required]),
        tipoPagamentoId:new FormControl(this.dadosDespesa ? this.dadosDespesa.tipoPagamentoId:'',[Validators.required]),
        dataCadastro:new FormControl(new Date()),
        dataAlteracao:new FormControl(new Date())
    });
  }

  submit(){
    //console.log(this.despesaForm.value);
    this.onSubmit.emit(this.despesaForm.value);

  }

}
