import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { UsuariosComponent } from '../../components/pages/usuarios/usuarios.component';
import { BarralateralComponent } from '../../components/shared/barralateral/barralateral.component';
import { CabeceraComponent } from '../../components/shared/cabecera/cabecera.component';
import { PantallitaComponent } from '../../components/shared/pantallita/pantallita.component';


import { AppRoutingModule } from '../../app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    BarralateralComponent,
    CabeceraComponent,
    PantallitaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ComponentsModule { }
