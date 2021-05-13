import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuariosService } from 'src/app/global/services/tipousuarios.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss'],
})
export class PresentacionComponent implements OnInit {
  
  firstObsSubscription: Subscription;
  clientes:boolean = true;



  constructor(private router: Router,
    private _tipoUsuario : TipoUsuariosService,) { 
     
    }

  ngOnInit() {

   this.firstObsSubscription = this._tipoUsuario.getTipoUsuario().subscribe((tipoUsuario) => {
   tipoUsuario;
   console.log(tipoUsuario)
   });
  }

  irEmpresa(){
    this.router.navigate(['/bienvenida']);
    this._tipoUsuario.setTipoUsuario(false);
  }

  irPersona(){
  this.router.navigate(['/bienvenida']);
  this._tipoUsuario.setTipoUsuario(true);
 
  }
}
