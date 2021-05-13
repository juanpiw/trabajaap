import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuariosService } from 'src/app/global/services/tipousuarios.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
})
export class BienvenidaComponent implements OnInit , OnDestroy{

  firstObsSubscription: Subscription;
  usuarioEmpresa: Boolean;


  constructor(private router: Router,
    private _tipoUsuario : TipoUsuariosService,
   ) { }

  ngOnInit() {

   this.firstObsSubscription = this._tipoUsuario.getTipoUsuario().subscribe((tipoUsuario) => {
      this.usuarioEmpresa= tipoUsuario 
     });
  
  
  }

  volver(){
    this.router.navigate(['/presentacion']);
  
  }
 
  ingresar(){
    this.router.navigate(['/login']);
  }

  registro(){
    this.router.navigate(['/registro']);
  }
  
  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
