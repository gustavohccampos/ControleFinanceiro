import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroDespesaComponent } from './pages/cadastro-despesa/cadastro-despesa.component';
import { AppRoutingModule } from './app-routing.module';
import { DespesaFormComponent } from './componentes/despesa-form/despesa-form.component';

import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

// Moedas Formato BRL**************************************************
import { DEFAULT_CURRENCY_CODE, LOCALE_ID} from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);
// **************************************************


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroDespesaComponent,
    DespesaFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  exports:[
  ]
  ,
  providers: [
        // MOEDA BRL ************************************
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
        // ************************************
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
