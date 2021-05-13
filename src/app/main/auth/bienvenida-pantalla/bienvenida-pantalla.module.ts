import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaPantallaComponent } from './bienvenida-pantalla.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BienvenidaComponent } from 'src/app/shared/auth/bienvenida/bienvenida.component';
import { IonicModule } from '@ionic/angular';
import { BienvenidaRoutingModule } from 'src/app/global/router/bienvenida-routing.module';


@NgModule({
  declarations: [
    BienvenidaPantallaComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    BienvenidaRoutingModule 

   
  ]
})
export class BienvenidaPantallaModule { }
