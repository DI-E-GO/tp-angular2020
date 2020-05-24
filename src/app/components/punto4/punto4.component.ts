import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/models/palabra';
import { PalabraService } from "./../../services/palabra.service";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  palabras: Palabra[];
  palabraEsp: string;
  palabraIng: string;
  urlImg: string;
  indice: number=0;
  longitudPalabra: number;
  puntos: number;
  vida: number;
  letra1: boolean;
  letra2: boolean;
  letra3: boolean;
  letra4: boolean;
  letra5: boolean;
  letra6: boolean;
  letra7: boolean;
  letra8: boolean;
  primera: boolean;
  segunda: boolean;
  tercera: boolean;
  cuarta: boolean;
  quinta: boolean;
  sexta: boolean;
  septima: boolean;
  octaba: boolean;
  letraSeleccionada: string;
  letras: Array<any>;
  contador: number = 0;

  constructor(private palabraService: PalabraService) {
    this.palabras = this.palabraService.getPalabras();
    this.inicarPartida();
    this.letras = new Array<any>();
    this.vida = 6;
    this.puntos = 0;
    this.cargarLetras();
  }

  ngOnInit(): void {
    this.palabras = this.palabraService.getPalabras();
  }
  refresh() {
    this.palabras = this.palabraService.getPalabras();
    this.inicarPartida();
    this.letras = new Array<any>();
    this.vida = 6;
    this.puntos = 0;
    this.cargarLetras();
    this.contador = 0;
    this.oculatrLetras();
  }
  continue() {
    this.palabras = this.palabraService.getPalabras();
    this.inicarPartida();
    this.letras = new Array<any>();
    this.puntos += 10;
    this.cargarLetras();
    this.contador = 0;
    this.oculatrLetras();
  }

  inicarPartida() {
    //this.letras.length=0;
    this.seleccionarPalabra();
  }

  seleccionarPalabra() {
    this.indice = Math.round(Math.random() * 9);
    this.palabraEsp = this.palabras[this.indice].palabraEspaniol;
    this.palabraIng = this.palabras[this.indice].palabraIngles;
    this.urlImg = this.palabras[this.indice].urlImagen;
    this.longitudPalabra = this.palabras[this.indice].palabraIngles.length;
    this.mostrarBotones();
  }

  cargarLetras() {
    const letra = this.palabras[this.indice].palabraIngles;
    for (let i = 0; i < this.longitudPalabra; i++) {
      this.letras.push(letra.charAt(i));
    }
  }

  compararLetra() {
    if (this.letraSeleccionada == this.letras[0] && this.letras[0] != null) {
      this.letra1 = true;
      this.contador++;
    } else {
      if (this.letraSeleccionada == this.letras[1] && this.letras[1] != null) {
        this.letra2 = true;
        this.contador++;
      } else {
        if (this.letraSeleccionada == this.letras[2] && this.letras[2] != null) {
          this.letra3 = true;
          this.contador++;
        } else {
          if (this.letraSeleccionada == this.letras[3] && this.letras[3] != null) {
            this.letra4 = true;
            this.contador++;
          } else {
            if (this.letraSeleccionada == this.letras[4] && this.letras[4] != null) {
              this.letra5 = true;
              this.contador++;
            } else {
              if (this.letraSeleccionada == this.letras[5] && this.letras[5] != null) {
                this.letra6 = true;
                this.contador++;
              } else {
                if (this.letraSeleccionada == this.letras[6] && this.letras[6] != null) {
                  this.letra7 = true;
                  this.contador++;
                } else {
                  if (this.letraSeleccionada == this.letras[7] && this.letras[7] != null) {
                    this.letra8 = true;
                    this.contador++;
                  } else {
                    this.vida -= 1;
                    alert('Has Fallado te quedan: '+this.vida+' intentos');

                  }
                }
              }
            }
          }
        }
      }
    }
    console.log(this.vida != 0);
    console.log(this.palabras[this.indice].palabraIngles.length == this.contador);
    if (this.vida != 0 && this.palabras[this.indice].palabraIngles.length == this.contador) {
      this.continue();
      alert(':v Buen trabajo!!!');
    } else {
      if (this.vida == 0) {
        alert(':c Fin de la partida tu puntaje es: '+this.puntos+' puntos')
        this.refresh();
      }
    }
  }
  oculatrLetras() {
    this.letra1 = false;
    this.letra2 = false;
    this.letra3 = false;
    this.letra4 = false;
    this.letra5 = false;
    this.letra6 = false;
    this.letra7 = false;
    this.letra8 = false;
  }
  mostrarBotones() {
    if (this.longitudPalabra > 2) {
      this.primera = true;
      this.segunda = true;
      this.tercera = true;
    } else {
      this.primera = false;
      this.segunda = false;
      this.tercera = false;
    }
    if (this.longitudPalabra > 3) {
      this.cuarta = true;
    } else {
      this.cuarta = false;
    }
    if (this.longitudPalabra > 4) {
      this.quinta = true;
    } else {
      this.quinta = false;
    }
    if (this.longitudPalabra > 5) {
      this.sexta = true;
    } else {
      this.sexta = false;
    }
    if (this.longitudPalabra > 6) {
      this.septima = true;
    } else {
      this.septima = false;
    }
    if (this.longitudPalabra > 7) {
      this.octaba = true;
    } else {
      this.octaba = false;
    }
  }
}
