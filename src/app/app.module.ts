import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultaComponent } from './consulta/consulta.component';
import { GerenciamentoComponent } from './gerenciamento/gerenciamento.component';
import { CadastroRemedioComponent } from './cadastro-remedio/cadastro-remedio.component';
import { AngularFireModule } from '@angular/fire';
import { FirebaseConfig } from 'src/environments/firebase.config';
import {MatSelectModule} from '@angular/material/select';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SaidaMedicamentoComponent } from './saida-medicamento/saida-medicamento.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    GerenciamentoComponent,
    CadastroRemedioComponent,
    SaidaMedicamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatSelectModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule]
})
export class AppModule { }
