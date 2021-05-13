import { Injectable } from '@angular/core';
import { Subject, Observable,Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TipoUsuariosService {
    /** Variables tipod de usuario */
    private tipoUsuario = new Subject<any>();
   

    constructor(){

    }

    setTipoUsuario(tipoUsuario){
        this.tipoUsuario.next(tipoUsuario);
    }

    getTipoUsuario(){
        return this.tipoUsuario.asObservable();
    }

}
