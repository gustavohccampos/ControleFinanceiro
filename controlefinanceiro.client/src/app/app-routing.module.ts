import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CadastroDespesaComponent } from './pages/cadastro-despesa/cadastro-despesa.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarDespesaComponent } from './pages/editar-despesa/editar-despesa.component';
import { DetalhesDespesaComponent } from './pages/detalhes-despesa/detalhes-despesa.component';

const routes: Routes =[
  {path:'cadastroDespesa', component:CadastroDespesaComponent},
  {path:'', component:HomeComponent},
  {path:'editarDespesa/:id', component:EditarDespesaComponent},
  {path:'detalhesDespesa/:id', component:DetalhesDespesaComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
