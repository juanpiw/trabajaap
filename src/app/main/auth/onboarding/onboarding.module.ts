import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingRoutingModule } from 'src/app/global/router/onboarding-routing.module';
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    RouterModule 
  ]
})
export class OnboardingModule { }
