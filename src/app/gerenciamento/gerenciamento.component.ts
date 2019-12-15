import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Observable } from 'rxjs';
import { GerencimantoService } from '../gerencimanto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.component.html',
  styleUrls: ['./gerenciamento.component.css']
})
export class GerenciamentoComponent implements OnInit {
  medicamentos: any;

  constructor(
    private firebaseService: FirebaseService,
    private gerenciamentoService: GerencimantoService,
    private router: Router) { }

  ngOnInit() {
    this.getMedicamentos();
  }

  getMedicamentos(){
    this.firebaseService.medicamentos().subscribe( (result: any) => {
      this.medicamentos = result;
    });
  }

  atualizarMedicamento(item){
    this.gerenciamentoService.setMedicamento(item);
    this.router.navigate(['CadastroMedicamento']);
  }

  deletarMedicamento(item) {
    this.firebaseService.deleteRemedio(item.id).then((result) => {
      // this.getMedicamentos();
    }).catch((error) => {
      console.log(error);
    });
  }
}
