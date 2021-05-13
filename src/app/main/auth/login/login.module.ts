import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LoginRoutingModule } from 'src/app/global/router/login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecuperarContrasenaModule } from '../recuperar-contrasena/recuperar-contrasena.module';


@NgModule({
  declarations: [ LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    BrowserModule,
    LoginRoutingModule,
    FormsModule,
    RecuperarContrasenaModule,ReactiveFormsModule


  ],
      
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  
})
export class LoginModule { }
