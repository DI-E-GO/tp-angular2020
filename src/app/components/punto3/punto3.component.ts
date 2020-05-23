import { Component, OnInit } from '@angular/core';
import { Pasaje } from "./../../models/pasaje";
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  pasaje:Pasaje;
  pasajes:Array<Pasaje>;
  mostrarTotal1:boolean=false;
  mostrarTotal2:boolean=false;
  total:number;
  contadorMenores:number=0;
  contadorAdultos:number=0;
  contadorJubilados:number=0;
  sumaGeneral:number=0;

  constructor(private pasajeService: PasajeService) { 
    this.pasaje = new Pasaje();
    this.pasajes = new Array<Pasaje>();
    this.refrescarPasaje();   
  }

  ngOnInit(): void {
  }

  registrarPasaje(){
    this.descontar();
    this.pasaje.precioPasaje = this.total;
    this.sumarTodo();
    this.pasajeService.addPasaje(this.pasaje);
    this.refrescarPasaje();
    this.pasaje = new Pasaje();
  }

  refrescarPasaje(){
    this.pasajes = this.pasajeService.getPasajes();
  }

  descontar(){
    if(this.pasaje.categoriaPasajero=="M"){
      this.total=this.pasaje.precioPasaje-this.pasaje.precioPasaje*25/100;
    }
    if(this.pasaje.categoriaPasajero=="A"){
      this.total=this.pasaje.precioPasaje;
    }
    if(this.pasaje.categoriaPasajero=="J"){
      this.total=this.pasaje.precioPasaje-this.pasaje.precioPasaje*50/100;
    }
    //console.log(this.total);
  }

  contarCategorias(){
    if(this.pasaje.categoriaPasajero=="M"){
      this.contadorMenores++;
    }
    if(this.pasaje.categoriaPasajero=="A"){
      this.contadorAdultos++;
    }
    if(this.pasaje.categoriaPasajero=="J"){
      this.contadorJubilados++;
    }
  }

  sumarTodo(){
    this.sumaGeneral+=this.pasaje.precioPasaje;
    console.log(this.pasaje.precioPasaje)
  }
}
