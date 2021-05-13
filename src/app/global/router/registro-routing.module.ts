import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { RecuperarContrasenaModule } from 'src/app/main/auth/recuperar-contrasena/recuperar-contrasena.module';
import { RecuperarContrasenaComponent } from 'src/app/main/auth/recuperar-contrasena/recuperar-contrasena.component';
import { RegistroComponent } from 'src/app/main/auth/registro/registro.component';


const routes: Routes = [
  {  

  path: '',  component:RegistroComponent
           
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
export class RegistroRoutingModule { }