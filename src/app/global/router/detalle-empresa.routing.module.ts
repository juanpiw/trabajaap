import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { DetalleEmpresaComponent } from 'src/app/main/detalles/detalle-empresa/detalle-empresa.component';


const routes: Routes = [
  {  

  path: '',  component:DetalleEmpresaComponent
           
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
export class DetalleEmpresaRoutingModule { }