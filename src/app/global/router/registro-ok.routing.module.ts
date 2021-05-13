import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { RegistroPantallaOkComponent } from 'src/app/main/auth/registro/registro-pantalla-ok/registro-pantalla-ok.component';


const routes: Routes = [
  {  

  path: '',  component:RegistroPantallaOkComponent
           
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule],
  declarations: [],
  providers: [
   // AuthGuard
  ]
})
export class RegistroOkRoutingModule { }