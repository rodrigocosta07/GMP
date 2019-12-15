import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GerencimantoService } from '../gerencimanto.service';
@Component({
  selector: 'app-cadastro-remedio',
  templateUrl: './cadastro-remedio.component.html',
  styleUrls: ['./cadastro-remedio.component.css']
})
export class CadastroRemedioComponent implements OnInit {
  postos: any;
  formRemedio: FormGroup;
  edit: boolean;
  constructor(
    private firebaseService: FirebaseService,
    private fb: FormBuilder, private router: Router,
    private gerenciamentoService: GerencimantoService) { }

  ngOnInit() {
    this.edit = false;
    this.formRemedio = this.fb.group({
      quantidade: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      posto: new FormControl('', [Validators.required]),
    });
    this.getPostos();
    if (this.gerenciamentoService.medicamentoEdit) {
      this.edit = true;
      this.formRemedio.controls.quantidade.setValue(this.gerenciamentoService.medicamentoEdit.quantidade);
      this.formRemedio.controls.nome.setValue(this.gerenciamentoService.medicamentoEdit.nome);
      this.formRemedio.controls.posto.setValue(this.gerenciamentoService.medicamentoEdit.posto);
    }
  }

  compareFn(x: any, y: any) {
    return x && y && x.id === y.id;
  }

  getPostos() {
    this.firebaseService.postos().subscribe((result) => {
      this.postos = result;
    });
  }

  onSubmit() {
    if (this.formRemedio.invalid) {
      return;
    }

    if (!this.edit) {
      this.firebaseService.createRemedio(this.formRemedio.value).then((result) => {
        this.router.navigate(['gerenciamento']);
      }).catch((error) => {
        console.log(error);
      });
    } else {
      this.firebaseService.updateMedicamento(this.gerenciamentoService.medicamentoEdit.id, this.formRemedio.value).then((result) => {
        this.router.navigate(['gerenciamento']);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
