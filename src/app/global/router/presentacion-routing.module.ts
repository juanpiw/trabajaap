import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from 'src/app/main/auth/presentacion/presentacion.component';

import { LocalStorageService } from '../services/local-storage.service';


const routes: Routes = [
  {  

  path: 'presentacion',  component: PresentacionComponent
           
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
export class PresentacionRoutingModule { }