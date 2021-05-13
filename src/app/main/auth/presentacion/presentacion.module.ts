import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from 'src/app/global/router/onboarding-routing.module';
import { PresentacionComponent } from './presentacion.component';
import { RegistroModule } from '../registro/registro.module';



@NgModule({
  declarations: [
    PresentacionComponent,
  
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
  

  ]
})
export class PresentacionModule { }
