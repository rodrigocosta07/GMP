import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenciamentoComponent } from './gerenciamento/gerenciamento.component';
import { CadastroRemedioComponent } from './cadastro-remedio/cadastro-remedio.component';
import { SaidaMedicamentoComponent } from './saida-medicamento/saida-medicamento.component';
import { ConsultaComponent } from './consulta/consulta.component';


const routes: Routes = [
  {path: '' , component: GerenciamentoComponent},
  {path: 'gerenciamento', component: GerenciamentoComponent},
  {path: 'CadastroMedicamento' , component: CadastroRemedioComponent},
  {path: 'SaidaMedicamento' , component: SaidaMedicamentoComponent},
  {path: 'gerenciamento/CadastroMedicamento' , component: CadastroRemedioComponent},
  {path: 'gerenciamento/SaidaMedicamento' , component: SaidaMedicamentoComponent},
  {path: 'gerenciamento/consulta' , component: SaidaMedicamentoComponent},
  {path: 'consulta' , component: ConsultaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
