import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  new_activities:boolean;

  constructor() {}
  goToPictures(){
    console.log('jo')
  }

}
