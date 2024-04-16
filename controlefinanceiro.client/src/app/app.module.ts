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
import { EditarDespesaComponent } from './pages/editar-despesa/editar-despesa.component';
import { DetalhesDespesaComponent } from './pages/detalhes-despesa/detalhes-despesa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(ptBr);
// *******Angular Material********************************
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
// **************************************************


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroDespesaComponent,
    DespesaFormComponent,
    EditarDespesaComponent,
    DetalhesDespesaComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
    MatButtonModule,MatCardModule, MatInputModule,MatCheckboxModule,
    MatDatepickerModule,MatSelectModule,MatNativeDateModule
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
