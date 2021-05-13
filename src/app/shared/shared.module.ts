import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from './auth/bienvenida/bienvenida.component';
import { IonicModule } from '@ionic/angular';
import { ValoracionComponent } from './ui/estrellas-valoracion.component';
import { CajaOfertasComponent } from './ui/caja-ofertas/caja-ofertas.component';
import { MapaComponent } from './ui/mapa/mapa.component';
import { ListaOfertasComponent } from './ui/lista-ofertas/lista-ofertas.component';
import { OfertasModalidadComponent } from './ui/ofertas-modalidad/ofertas-modalidad.component';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from './ui/avatar/avatar.component';
import { DetalleUsuarioModule } from '../main/detalles/detalle-usuario/detalle-usuario.module';



@NgModule({
  declarations: [BienvenidaComponent,
    ValoracionComponent,
    CajaOfertasComponent,
    MapaComponent,
    ListaOfertasComponent,
    OfertasModalidadComponent,
    AvatarComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
   
    
  ],exports:[
    BienvenidaComponent,
    ValoracionComponent,
    CajaOfertasComponent,
    MapaComponent,
    ListaOfertasComponent,
    OfertasModalidadComponent,
    AvatarComponent
  ]
})
export class SharedModule { }
