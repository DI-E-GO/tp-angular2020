import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/models/palabra';
import { PalabraService } from "./../../services/palabra.service";

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  palabras: Palabra[];
  palabraEsp:string;
  palabraIng:string;
  urlImg:string;
  indice:number=0;
  longitudPalabra:number;
  puntos:number;
  vida:number;
  primera:boolean;
  segunda:boolean;
  tercera:boolean;
  cuarta:boolean;
  quinta:boolean;
  sexta:boolean;
  septima:boolean;
  octaba:boolean;

  constructor(private palabraService: PalabraService) { 
    this.palabras = this.palabraService.getPalabras();
    this.inicarPartida();
    this.vida=6;
    this.puntos=0;
  }

  ngOnInit(){
    this.palabras = this.palabraService.getPalabras();
  }

  inicarPartida(){
    this.seleccionarPalabra();
  }

  seleccionarPalabra(){
    this.indice=Math.round(Math.random()*9);
    this.palabraEsp = this.palabras[this.indice].palabraEspaniol;
    this.palabraIng = this.palabras[this.indice].palabraIngles;
    this.urlImg = this.palabras[this.indice].urlImagen;
    this.longitudPalabra=this.palabras[this.indice].palabraIngles.length;
    console.log(this.longitudPalabra);
    this.mostrarBotones();
  }
  limpiarBotones(){
  this.primera=false;
  this.segunda=false;
  this.tercera=false;
  this.cuarta=false;
  this.quinta=false;
  this.sexta=false;
  this.septima=false;
  this.octaba=false;
  }
  mostrarBotones(){
    if(this.longitudPalabra>2){
      this.primera=true;
      this.segunda=true;
      this.tercera=true;
    }
    if(this.longitudPalabra>3){
      this.cuarta=true;
    }
    if(this.longitudPalabra>4){
      this.quinta=true;
    }
    if(this.longitudPalabra>5){
      this.sexta=true;
    }
    if(this.longitudPalabra>6){
      this.septima=true;
    }
    if(this.longitudPalabra>7){
      this.octaba=true;
    }
  }
}
