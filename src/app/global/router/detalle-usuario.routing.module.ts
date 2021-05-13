import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { DetalleOfertaComponent } from 'src/app/main/detalles/detalle-oferta/detalle-oferta.component';
import { DetalleUsuarioComponent } from 'src/app/main/detalles/detalle-usuario/detalle-usuario.component';


const routes: Routes = [
  {  

  path: '',  component:DetalleUsuarioComponent
           
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
export class DetalleUsuarioRoutingModule { }