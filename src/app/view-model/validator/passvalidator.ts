import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilsProvider {
    @Output() tabEmitter: EventEmitter<any> = new EventEmitter();
    @Output() tokenRefreshEmitter: EventEmitter<any> = new EventEmitter();
    public _pageHeigth = new BehaviorSubject<any>(null);

    constructor(private http: HttpClient) { }
   
   
    /**
    * @ngdoc method
    * @name regex
    * @methodOf UtilsProvider
    *
    * @description
    * Formateo de password
    * @param {rut sting}
    *
    * @returns {boolean}
    */

    ValidarPassword(pass: string) {
        let regex = new RegExp(/(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/g);
        let resultado = regex.test(pass);
        return resultado;
    }


    /**
     * metodo para convertir un string a fecha.
     * @param fechaInput string para covertir en fecha (YYYY/MM/DD).
     */
    convertStringToDate(fechaInput: string) {
        return new Date(fechaInput.split('/').reverse().join('-') + 'T00:00:00');
    }

    
    validatePasswordSecurity(password: string): 
        { seguridadBaja: boolean, seguridadMedia: boolean, seguridadAlta: boolean, textProgressBar: string } | false 
    {
        if (this.ValidarPassword(password)) {
            if (password.length <= 7) {
                return { seguridadBaja: true,
                         seguridadMedia: false,
                         seguridadAlta: false,
                         textProgressBar: "Seguridad Baja" };
            }
            if (password.length <= 10) {
                return { seguridadBaja: false,
                         seguridadMedia: true, 
                         seguridadAlta: false, 
                         textProgressBar: "Seguridad Media" };
            }
            if (password.length > 10) {
                return { seguridadBaja: false, 
                         seguridadMedia: false,
                         seguridadAlta: true, 
                         textProgressBar: "Seguridad Alta" };
            }
        } else {
            return false;
        }
    }

   
}

