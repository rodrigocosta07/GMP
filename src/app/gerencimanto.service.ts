import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerencimantoService {
  public medicamentoEdit: any;
  constructor() { }

  setMedicamento(item){
    this.medicamentoEdit = item;
  }

  public getMedicamento(){
    return this.medicamentoEdit;
  }
}
