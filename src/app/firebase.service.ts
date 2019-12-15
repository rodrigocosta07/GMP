import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private medicamentosList = [];
  constructor(public db: AngularFirestore) { }
  
  getMedicamentos() {
    if (this.medicamentosList && this.medicamentosList.length) {
      return of(this.medicamentosList);
    } else {
      return this.db.collection('remedios', ref => {
        return ref.orderBy('nome')
      }).valueChanges().pipe(
          tap((medicamentos) => this.medicamentosList = medicamentos)
        );
    }
  }
  createRemedio(value) {
    return this.db.collection('remedios').add({
      nome: value.nome,
      quantidade: value.quantidade,
      posto: value.posto
    });
  }

  registrarSaidaMedicamento(value) {
    return this.db.collection('baixasMedicamentos').add({
      medicamento: value.medicamento,
      quantidade: value.quantidade,
      paciente: value.paciente,
      numeroSus: value.numeroSus,
    });
  }

  postos() {
    return this.db.collection('postos')
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })));
  }

  medicamentos() {
    return this.db.collection('remedios')
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })));
  }

  // getConvidados() {
  //   return new Promise<any>((resolve, reject) => {
  //     this.db.collection('/convidados').snapshotChanges()
  //     .subscribe(snapshots => {
  //       resolve(snapshots);
  //     });
  //   });
  // }
  updateConvidado(userKey, value) {
    return this.db.doc('convidados/' + userKey).update(value);
  }

  updateMedicamento(userKey, value) {
    return this.db.doc('remedios/' + userKey).update(value);
  }

  updatePresente(userKey, value) {
    return this.db.doc('presentes/' + userKey).update(value);
  }
  deleteConvidado(userKey) {
    return this.db.collection('convidados').doc(userKey).delete();
  }
  deleteRemedio(userKey) {
    return this.db.collection('remedios').doc(userKey).delete();
  }

  searchConvidados(searchValue) {
    return this.db.collection('remedios', ref => ref.where('nome', '==', searchValue)
      .where('nome', '==', searchValue))
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })));
  }
  searchConvidadosByName(searchValue) {
    return this.db.collection('convidados', ref => ref.where('nome', '>=', searchValue)
      .where('nome', '<=', searchValue))
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })));
  }
  getPresentes() {
    return this.db.collection('presentes')
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })));
  }
}
