import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-valoracion',
  templateUrl: './estrellas-valoracion.component.html',
  styleUrls: ['./estrellas-valoracion.component.scss'],
})
export class ValoracionComponent implements OnInit {

  tipoEstrellaUno: string = '/assets/icon/icn_estrella_vacia.svg';
  tipoEstrellaDos:string = '/assets/icon/icn_estrella_vacia.svg';
  tipoEstrellaTres:string = '/assets/icon/icn_estrella_vacia.svg';
  tipoEstrellaCuatro:string = '/assets/icon/icn_estrella_vacia.svg';
  tipoEstrellaCinco:string = '/assets/icon/icn_estrella_vacia.svg';


  contador: number = 0;
  sumaContador: number ; //TODO logica jano
  sumaCantidadVeces: number;//TODO logica jano
  estrellaUno : number = 1;
  estrellaDos : number = 2;
  estrellaTres : number = 3;
  estrellaCuatro : number = 4;
  estrellaCinco : number = 5;

  
  constructor(private router: Router ) { }

  ngOnInit() {
   

  }

  valoracion(){

  
  }

  clickEstrellaUno(){
    
    this.contador = 1;
    if(this.contador >=1 ){
      this.tipoEstrellaUno = '/assets/icon/icn_estrella.svg';
     }
     console.log(this.contador)
   
  }  
  clickEstrellaDos(){
    this.contador = 2;
    if(this.contador >=2 ){
      this.tipoEstrellaDos = '/assets/icon/icn_estrella.svg';
     }
     this.todoContador();
     console.log(this.contador)
    return this.contador;
  }
  clickEstrellaTres(){
    this.contador = 3;
    if(this.contador <=3 ){
      this.tipoEstrellaTres = '/assets/icon/icn_estrella.svg';
     }
   this.todoContador();
  }
  clickEstrellaCuatro(){
    this.contador = 4;
    if(this.contador <=4 ){
      this.tipoEstrellaCuatro = '/assets/icon/icn_estrella.svg';
     }
     this.todoContador()
     console.log(this.contador)
    return this.contador;
  }
  clickEstrellaCinco(){
    this.contador = 5;
    if(this.contador <=5 ){
      this.tipoEstrellaCinco = '/assets/icon/icn_estrella.svg';
     }
     console.log(this.contador)
     this.todoContador();
    return this.contador;
  }
 
  todoContador(){
    if(this.contador >= 5){
      this.tipoEstrellaUno = '/assets/icon/icn_estrella.svg';
      this.tipoEstrellaDos = '/assets/icon/icn_estrella.svg';
      this.tipoEstrellaTres = '/assets/icon/icn_estrella.svg';
      this.tipoEstrellaCuatro = '/assets/icon/icn_estrella.svg';
      this.tipoEstrellaCinco = '/assets/icon/icn_estrella.svg';
    }
    if(this.contador >= 4){
      this.tipoEstrellaUno = '/assets/icon/icn_estrella.svg';
      this.tipoEstrellaDos = '/assets/icon/icn_estrella.svg';
      this.tipoEstrellaTres = '/assets/icon/icn_estrella.svg';
      this.tipoEstrellaCuatro = '/assets/icon/icn_estrella.svg';
    }
    if(this.contador >= 3){
      this.tipoEstrellaUno = '/assets/icon/icn_estrella.svg';
      this.tipoEstrellaDos = '/assets/icon/icn_estrella.svg';
      this.tipoEstrellaTres = '/assets/icon/icn_estrella.svg';
      console.log(this.contador)
    }
    if(this.contador >= 2){
      this.tipoEstrellaUno = '/assets/icon/icn_estrella.svg';
      this.tipoEstrellaDos = '/assets/icon/icn_estrella.svg';
    }
    


  }

  

}