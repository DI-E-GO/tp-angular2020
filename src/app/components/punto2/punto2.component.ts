import { Component, OnInit } from '@angular/core';
import { Registro } from "./../../models/registro";
import { ConstPipe } from "./../../pipes/const.pipe";

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  pipe:ConstPipe;
  registro:Registro;
  registros:Array<Registro>;

  constructor() {
    this.registro = new Registro();
    this.registros = new Array<Registro>();
   }

  ngOnInit(): void {
  }

  public registrarFormulario(){
    this.registros.push(this.registro);
    this.registro = new Registro();
  }
}
