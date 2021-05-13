import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-configuracion',
  templateUrl: './modal-configuracion.component.html',
  styleUrls: ['./modal-configuracion.component.scss'],
})
export class modalConfiguracionComponent implements OnInit {
  
  constructor(private router: Router,
    private modalController: ModalController) { }
  

  ngOnInit() {}

  volver(){
    this.router.navigate(['tabs/tab1']);
  }
  
  salir() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
