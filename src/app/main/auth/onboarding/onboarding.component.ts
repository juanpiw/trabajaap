import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {

  constructor(private router: Router) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  ngOnInit() {}

  irA(){
    console.log('presentacion')
    this.router.navigate(['/presentacion']);
  }

}
