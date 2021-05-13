import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from 'src/app/global/router/registro-routing.module';
import { RouterModule } from '@angular/router';
import { RegistroModule } from './registro/registro.module';
import { BienvenidaPantallaModule } from './bienvenida-pantalla/bienvenida-pantalla.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RegistroRoutingModule,
    RouterModule,
    RegistroModule,
    BienvenidaPantallaModule,
    LoginModule
  ],
  exports: [RouterModule,CommonModule]
})
export class AuthModule { }