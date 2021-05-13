import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from 'src/app/main/auth/onboarding/onboarding.component';


const routes: Routes = [
  {  

  path: 'onboarding',  component: OnboardingComponent 
           
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
export class OnboardingRoutingModule { }