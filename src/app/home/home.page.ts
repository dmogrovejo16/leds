import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
rutaTabla:any;
stateLED:boolean=false;
  constructor(private db:Firestore) {}

  async apagar() {
    this.rutaTabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
    await setDoc(this.rutaTabla, { encender: false });//CAMBIA EL ATRIBUTO DE LA TABLA
}

async prender() {
  this.rutaTabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  await setDoc(this.rutaTabla, { encender: true });//CAMBIA EL ATRIBUTO DE LA TABLA
}

async toogleState() {
  this.stateLED=!this.stateLED;
  this.rutaTabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  await setDoc(this.rutaTabla, { encender: this.stateLED });//CAMBIA EL ATRIBUTO DE LA TABLA
}

}
