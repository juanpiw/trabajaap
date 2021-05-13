import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from 'src/app/global/router/registro-routing.module';
import { RouterModule } from '@angular/router';
import { RegistroPantallaOkComponent } from './registro-pantalla-ok/registro-pantalla-ok.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegistroComponent, RegistroPantallaOkComponent
  ],
  imports: [
    CommonModule,RegistroRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  exports: [RouterModule,CommonModule,RegistroComponent]
})
export class RegistroModule { }
