import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LocalStorageService } from '../services/local-storage.service';
import { LoginComponent } from 'src/app/main/auth/login/login.component';


const routes: Routes = [
  {  

  path: '',  component:LoginComponent
           
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
export class LoginRoutingModule { }