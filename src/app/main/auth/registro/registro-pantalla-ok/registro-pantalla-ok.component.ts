import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-pantalla-ok',
  templateUrl: './registro-pantalla-ok.component.html',
  styleUrls: ['./registro-pantalla-ok.component.scss'],
})
export class RegistroPantallaOkComponent implements OnInit {
  usuarioEmpresa:boolean=false;
  nombreUsuario:string="Juan Pablo";
  correoUsuario:string="juanpablojpw@gmail.com";
  errorPeticion:boolean = true;

  
  constructor(private router: Router,) { }

  ngOnInit() {}


  irAlHome(){
  this.router.navigate(['/tabs/tab1']);
  }
  volver(){
    this.router.navigate(['/registro']);
  }

}
