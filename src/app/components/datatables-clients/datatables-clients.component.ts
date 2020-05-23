import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { Punto3Component } from "./../../components/punto3/punto3.component";

@Component({
  selector: 'app-datatables-clients',
  templateUrl: './datatables-clients.component.html',
  styleUrls: ['./datatables-clients.component.css']
})
export class DatatablesClientsComponent implements OnInit {
  pasaje:Punto3Component;
  clients:Array<Pasaje>;
  constructor(pasaje?: Punto3Component) { 
    this.pasaje = pasaje;
    this.clients = this.pasaje.pasajes; 
  }

  ngOnInit(): void {
  }

}
