import { AbstractControl } from '@angular/forms';

export function correoValidator(control: AbstractControl) {

    const correo: string = control && control.value || '';
    if (!correo.match(/^([\w\.\-\+]+)@([\w\-]+)((\.(\w){2,3})+)$/)) {
        return { correoFormat: true };
    }

    if (!correo.match(/^[a-zA-Z0-9]{1,}[a-zA-Z0-9_\-\.~]*@[a-zA-Z0-9_\-\.~]{1,}\.[a-zA-Z]{2,4}$/)) {
        return { correoFormat: true };
    }

}
