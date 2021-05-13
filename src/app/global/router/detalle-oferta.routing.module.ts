import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { DetalleOfertaComponent } from 'src/app/main/detalles/detalle-oferta/detalle-oferta.component';


const routes: Routes = [
  {  

  path: '',  component:DetalleOfertaComponent
           
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
export class DetalleOfertaRoutingModule { }