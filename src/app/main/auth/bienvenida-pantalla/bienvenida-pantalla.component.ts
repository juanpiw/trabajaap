import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bienvenida-pantalla',
  templateUrl: './bienvenida-pantalla.component.html',
  styleUrls: ['./bienvenida-pantalla.component.scss'],
})
export class BienvenidaPantallaComponent implements OnInit {
  usuarioEmpresa:Boolean;
  constructor( ) { }

  ngOnInit() {
    
  }

}
