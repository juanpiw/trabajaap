import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ofertas-modalidad',
  templateUrl: './ofertas-modalidad.component.html',
  styleUrls: ['./ofertas-modalidad.component.scss'],
})
export class OfertasModalidadComponent implements OnInit {

   seleccionValue:string;
   selector:string;
   category:string;
 
  
  constructor(private router: Router ) { }

  ngOnInit() {
    
  }

  cambioFulltime(){
      this.category = 'fullTime';
       console.log(this.category)
  }

  cambioPartime(){
    this.category = 'partTime';
    console.log(this.category)
  }

  cambioTeletrabajo(){
    this.category = 'telejob';
    console.log(this.category)
  }

  irAdetalleOferta(){
    
    this.router.navigate(['/detalle-oferta']);
  }
  irAdetalleUsuario(){
    
    this.router.navigate(['/detalle-usuario']);
  }

  irAdetalleEmpresa(){
    
    this.router.navigate(['/detalle-empresa']);
  }









}