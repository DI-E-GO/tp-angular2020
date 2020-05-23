import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
pasajes:Array<Pasaje>;

  constructor() { 
    this.pasajes = new Array<Pasaje>();
  }
  getPasajes(){
    return this.pasajes;
  }
  addPasaje(pasaje:Pasaje){
    this.pasajes.push(pasaje);
  }
}
