import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map, debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  filteredOptions: any;
  myControl: any;
  searchModel = '';
  options: any;
  remedioSelecionado: any;
  constructor(private firebaseService: FirebaseService) {
    this.search();
   }

  ngOnInit() {
    this.search();
  }


  search() {
    this.remedioSelecionado = '';
    this.filteredOptions = this.firebaseService.getMedicamentos().pipe(
      debounceTime(300),
      map((data) => this.performFilter(data)));
  }

  performFilter(schoolsObs) {
    return schoolsObs.filter((x) => {
      // filter by what prop you want
      return x.nome.toLowerCase().startsWith(this.searchModel.trim().toLowerCase());
    });
  }


  selectItem(item) {
    console.log(item);
    this.remedioSelecionado = item;
  }
}
