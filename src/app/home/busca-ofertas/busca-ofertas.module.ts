import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaOfertasComponent } from './busca-ofertas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { CajaOfertasComponent } from 'src/app/shared/ui/caja-ofertas/caja-ofertas.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BuscaOfertasComponent,
    ],
  imports: [
    SharedModule,
    IonicModule,
    CommonModule,
    FormsModule,
    AgmCoreModule
  ]
})
export class BuscaOfertasModule { }
