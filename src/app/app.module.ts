import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './global/router/app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './main/auth/login/login.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from './main/auth/auth.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core'
import { BuscaOfertasModule } from './home/busca-ofertas/busca-ofertas.module';
import { DetalleUsuarioModule } from './main/detalles/detalle-usuario/detalle-usuario.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    SharedModule,  
    CommonModule,
    AuthModule,
    GoogleMapsModule,
    BuscaOfertasModule,
    DetalleUsuarioModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4k2aYYduH4WRtXXC8wlqr-p5LX-rvIww'
    }) ],
    exports:[
      CommonModule,
    ],
    
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
