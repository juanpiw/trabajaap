import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-ofertas',
  templateUrl: './lista-ofertas.component.html',
  styleUrls: ['./lista-ofertas.component.scss'],
})
export class ListaOfertasComponent implements OnInit {

 
  
  constructor(private router: Router ) { }

  ngOnInit() {

  }

  irAdetalleUsuario(){
    
    this.router.navigate(['/detalle-usuario']);
  }
 



}