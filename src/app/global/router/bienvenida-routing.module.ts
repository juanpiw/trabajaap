import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocalStorageService } from '../services/local-storage.service';

import { BienvenidaPantallaComponent } from 'src/app/main/auth/bienvenida-pantalla/bienvenida-pantalla.component';



const routes: Routes = [
  {  

  path: 'bienvenida',  component: BienvenidaPantallaComponent
           
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule],
  declarations: [],
  providers: [
   // AuthGuard
  
   LocalStorageService
  ]
})
export class BienvenidaRoutingModule { }