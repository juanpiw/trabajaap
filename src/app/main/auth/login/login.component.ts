import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { correoValidator } from 'src/app/view-model/validator/correovalidators';
import { TipoUsuariosService } from 'src/app/global/services/tipousuarios.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit ,DoCheck,OnDestroy {
  firstObsSubscription: Subscription;
  dataLogin: FormGroup;
  invalidTextContrasena:string="La contraseña es incorrecta"
  usuarioEmpresa:boolean;
  verPassword:boolean;
  verIcnValid:boolean;
  verIcnInput:boolean;
  imgInputValid:string;
  tipeInput:string="password"


  constructor(
    private _tipoUsuario : TipoUsuariosService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
   
   }

  ngDoCheck() {
    if(this.dataLogin.get('email').valid){
      this.verIcnValid=true;
      this.verIcnInput=true;
    }else{
      this.verIcnValid=false;
    }
  }
   
  ngOnInit() {
    this.invalidTextContrasena;
    this.dataLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required,Validators.email,
        correoValidator
      ]),
      password: new FormControl('', [Validators.required]),
    });
       this.imgInputValid;
       if(this.dataLogin.get('email').valid){
            this.verIcnValid=true;
            this.verIcnInput=true;
       }else{
    
       }
       this.validInput();

   this._tipoUsuario.getTipoUsuario().subscribe((tipoUsuario) => {
    this.usuarioEmpresa = tipoUsuario;
   });


   this.firstObsSubscription = this._tipoUsuario.getTipoUsuario().subscribe((tipoUsuario) => {
    this.usuarioEmpresa= tipoUsuario 
   });



  }

   volver(){
     this.router.navigate(['/bienvenida']);
   }  

   irArecuperar(){
     console.log('ir a')
     this.router.navigate(['/recuperarcontasena']);
   }

   login(){
     console.log('ir a')
     this.router.navigate(['/tabs/tab1']);
   }

   verPass(){
     console.log('ver password')
     this.verPassword = !this.verPassword;
     if(!this.verPassword){
        this.tipeInput="password";
      }else{
       this.tipeInput="text";
    }
   
   }
    validInput(){
    if(!this.dataLogin.get('email').valid &&  this.dataLogin.get('email').touched){
      console.log('correo invalido en el oninit')
       this.imgInputValid ="/assets/icon/icn-error.svg";
       this.verIcnInput=true;
       
      }else{
        console.log('correo valido en el onint')
        this.imgInputValid ="/assets/icon/icn-ok.svg";
        this.verIcnInput=false;
      
      }
    }

   onSumit(dataLogin){
    this.validInput()
     console.log(this.dataLogin);
     this.router.navigate(['/tabs/tab1']);
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
