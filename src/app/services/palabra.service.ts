import { Injectable} from '@angular/core';
import { Palabra } from '../models/palabra';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {
private palabras:Palabra[];
  constructor() { 
    this.palabras =[
      {
        palabraIngles: 'giraffe',
        palabraEspaniol: 'jirafa',
        urlImagen: './../../../assets/img/jirafa.png'    },
      {
        palabraIngles: 'lion',
        palabraEspaniol: 'león',
        urlImagen: './../../../assets/img/leon.png'      },
      {
        palabraIngles: 'wolf',
        palabraEspaniol: 'lobo',
        urlImagen: './../../../assets/img/lobo.png'      },
      {
        palabraIngles: 'fox',
        palabraEspaniol: 'zorro',
        urlImagen: './../../../assets/img/zorro.png'      },
      {
        palabraIngles: 'mouse',
        palabraEspaniol: 'ratón',
        urlImagen: './../../../assets/img/roedor.png'      },
      {
        palabraIngles: 'dog',
        palabraEspaniol: 'perro',
        urlImagen: './../../../assets/img/perro.png'      },
      {
        palabraIngles: 'duck',
        palabraEspaniol: 'pato',
        urlImagen: './../../../assets/img/pato.png'      },
      {
        palabraIngles: 'bear',
        palabraEspaniol: 'oso',
        urlImagen: './../../../assets/img/oso.png'      },
      {
        palabraIngles: 'monkey',
        palabraEspaniol: 'mono',
        urlImagen: './../../../assets/img/mono.png'      },
      {
        palabraIngles: 'parrot',
        palabraEspaniol: 'loro',
        urlImagen: './../../../assets/img/loro.png'      }
    ]
  }
  getPalabras(){
    return this.palabras;
  }
}
