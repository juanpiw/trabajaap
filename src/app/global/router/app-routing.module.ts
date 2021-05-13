import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from 'src/app/home/tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../home/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./onboarding-routing.module').then(m => m.OnboardingRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('./presentacion-routing.module').then(m => m.PresentacionRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('./bienvenida-routing.module').then(m => m.BienvenidaRoutingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login-routing.module').then(m => m.LoginRoutingModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tab-routing.module').then(m => m.TabsPageRoutingModule)
  },
  {
    path: 'recuperarcontasena',
    loadChildren: () => import('./recupera-contrasena-routing.module').then(m => m.RecuperaContrasenaRoutingModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro-routing.module').then(m => m.RegistroRoutingModule)
  },
  {
    path: 'registro-ok',
    loadChildren: () => import('./registro-ok.routing.module').then(m => m.RegistroOkRoutingModule)
  },
  {
    path: 'busca-ofertas',
    loadChildren: () => import('./busca-ofertas-routing.module').then(m => m.BuscaOfertasRoutingModule)
  },
  {
    path: 'detalle-oferta',
    loadChildren: () => import('./detalle-oferta.routing.module').then(m => m.DetalleOfertaRoutingModule)
  },
  {
    path: 'detalle-usuario',
    loadChildren: () => import('./detalle-usuario.routing.module').then(m => m.DetalleUsuarioRoutingModule)
  },
  {
    path: 'detalle-empresa',
    loadChildren: () => import('./detalle-empresa.routing.module').then(m => m.DetalleEmpresaRoutingModule)
  },
  
  { path: '', redirectTo: '/onboarding', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
