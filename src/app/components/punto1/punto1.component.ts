import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  mensaje:Mensaje
  tamMaxTexto:number = 120;
  tamTexto:number = 0;

  mensajes: Array<Mensaje>;
  constructor() {
    this.mensaje = new Mensaje();
    this.mensajes = new Array<Mensaje>();
   }

  ngOnInit(): void {
  }

  public cambiarTamTexto(){
    this.tamTexto = this.mensaje.texto.length;
  }

  public enviarMensaje(){
    this.mensajes.push(this.mensaje);
    this.mensaje = new Mensaje();
  }
  public limpiarMensaje(){
    this.mensaje = new Mensaje();
  }
  public borrarMensaje(){
    this.mensajes.pop();
  }
}
