import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss'],
})
export class DetalleUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  volver(){
    this.router.navigate(['/busca-ofertas']);
  }
 
}
