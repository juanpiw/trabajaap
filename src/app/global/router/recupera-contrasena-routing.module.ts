import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { RecuperarContrasenaModule } from 'src/app/main/auth/recuperar-contrasena/recuperar-contrasena.module';
import { RecuperarContrasenaComponent } from 'src/app/main/auth/recuperar-contrasena/recuperar-contrasena.component';


const routes: Routes = [
  {  

  path: '',  component:RecuperarContrasenaComponent
           
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
export class RecuperaContrasenaRoutingModule { }