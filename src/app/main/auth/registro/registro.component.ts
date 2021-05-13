import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { correoValidator } from 'src/app/view-model/validator/correovalidators';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  usuarioEmpresa:boolean=true;
  dataRegistro: FormGroup;
  verPassword:boolean;
  tipeInput:string="password"

  constructor(private router: Router,
    private formBuilder: FormBuilder,) { }


  ngOnInit() {
    this.dataRegistro =  this.formBuilder.group({
      email: new FormControl('', [Validators.required,Validators.email,
        correoValidator
      ]),
      nombres: new FormControl('', [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(14),
        Validators.pattern( "[a-zA-Z ]{2,254}")

      ]),
      apellidos: new FormControl('', [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(22),
        Validators.pattern( "[a-zA-Z ]{2,254}")

      ]),
      password: new FormControl('', [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(14)

      ] ),
      repertirpassword: new FormControl('', [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(14)
      ]),
    });
  }
  
  
 volver(){
   this.router.navigate(['/bienvenida']);
  }

  onSumit(){
    //this.router.navigate(['/registro-ok']);
    console.log('email: ' + this.dataRegistro.controls.email.value);
    console.log('nombres: ' + this.dataRegistro.controls.nombres.value);
    console.log('apellidos: ' + this.dataRegistro.controls.apellidos.value);
    console.log('password: ' + this.dataRegistro.controls.password.value);
    console.log('repetirpassword: ' + this.dataRegistro.controls.repertirpassword.value);

    console.log(this.dataRegistro)
  }
  verPass(){
    this.verPassword = !this.verPassword;
    if(!this.verPassword){
       this.tipeInput="password";
     }else{
      this.tipeInput="text";
   }
  
  }
  

}
