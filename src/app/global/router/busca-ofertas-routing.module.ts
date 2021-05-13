import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaOfertasComponent } from 'src/app/home/busca-ofertas/busca-ofertas.component';



const routes: Routes = [
  {  

  path: '',  component:BuscaOfertasComponent
           
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
export class BuscaOfertasRoutingModule { }