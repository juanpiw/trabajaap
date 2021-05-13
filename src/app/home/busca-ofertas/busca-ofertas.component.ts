import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, ModalController, IonRouterOutlet } from "@ionic/angular";
import { modalConfiguracionComponent } from './modal-coniguracion/modal-configuracion.component';

@Component({
  selector: 'app-busca-ofertas',
  templateUrl: './busca-ofertas.component.html',
  styleUrls: ['./busca-ofertas.component.scss'],
})
export class BuscaOfertasComponent implements OnInit {
  @ViewChild(IonContent,{static: true}) content: IonContent;
  constructor(private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet) { }
  

  ngOnInit() {}

  volver(){
    this.router.navigate(['tabs/tab1']);
  }
  scrollToTop() {
    this.content.scrollToTop();
  }

  async mostrarModal(){
    console.log('mostrarModal')
    const modal = await this.modalController.create({
      component: modalConfiguracionComponent,
      cssClass: 'my-custom-modal-css',
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }
}
