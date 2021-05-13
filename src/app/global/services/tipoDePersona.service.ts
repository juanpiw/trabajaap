import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TipodeUsuariowService  {

    tipoPersona$ = new EventEmitter<Boolean>();


  constructor() {       
    }

    

}