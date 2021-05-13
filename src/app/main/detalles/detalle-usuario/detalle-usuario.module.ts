import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValoracionComponent } from 'src/app/shared/ui/estrellas-valoracion.component';
import { DetalleUsuarioComponent } from './detalle-usuario.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetalleUsuarioRoutingModule } from 'src/app/global/router/detalle-usuario.routing.module';



@NgModule({
  declarations: [ 
    
    DetalleUsuarioComponent],
  imports: [
    SharedModule,
    CommonModule,
    IonicModule,
    
    
  ]
})
export class DetalleUsuarioModule { }
