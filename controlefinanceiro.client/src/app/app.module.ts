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
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
