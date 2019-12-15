import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-saida-medicamento',
  templateUrl: './saida-medicamento.component.html',
  styleUrls: ['./saida-medicamento.component.css']
})
export class SaidaMedicamentoComponent implements OnInit {
  medicamentos: any;
  formSaida: FormGroup;
  constructor(
    private firebaseService: FirebaseService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.formSaida = this.fb.group({
      medicamento: new FormControl('', [Validators.required]),
      quantidade: new FormControl('', [Validators.required]),
      paciente: new FormControl('', [Validators.required]),
      numeroSus: new FormControl('', [Validators.required]),
    });
    this.getMedicamentos();
  }
  getMedicamentos() {
    this.firebaseService.medicamentos().subscribe((result: any) => {
      this.medicamentos = result.filter((remedio) => {
        return remedio.quantidade !== 0;
      });
    });
  }



  onSubmit() {
    if (this.formSaida.invalid) {
      return;
    }

    const medicamentoSelecionado = this.formSaida.controls.medicamento.value;
    if (medicamentoSelecionado.quantidade < this.formSaida.controls.quantidade.value) {
      return;
    }
    medicamentoSelecionado.quantidade = medicamentoSelecionado.quantidade - this.formSaida.controls.quantidade.value;
    this.firebaseService.updateMedicamento(medicamentoSelecionado.id, medicamentoSelecionado).then(() => {
      this.formSaida.controls.medicamento.setValue(medicamentoSelecionado.nome);
      this.firebaseService.registrarSaidaMedicamento(this.formSaida.value).then((result) => {
        this.router.navigate(['gerenciamento']);
        console.log('é sucessoooooo');
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error);
    });
  }
}
