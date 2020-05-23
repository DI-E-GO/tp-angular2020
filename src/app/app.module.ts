import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDataTableModule } from "angular-9-datatable";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto4Component } from './components/punto4/punto4.component';
import { ConstPipe } from './pipes/const.pipe';
import { DatatablesClientsComponent } from './components/datatables-clients/datatables-clients.component';
import { PalabraService } from './services/palabra.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component,
    Punto4Component,
    ConstPipe,
    DatatablesClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDataTableModule
  ],
  providers: [
    PalabraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
