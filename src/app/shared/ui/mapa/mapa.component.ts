import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Lugar } from 'src/app/global/interfaces/lugar';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

 @ViewChild('map',{static: true}) mapaElement : ElementRef
 map:google.maps.Map
 imgMarcador="/assets/icon/icn_ubicacion1.svg"

 marcadores:google.maps.Marker[] = [];

//TODO datos de prueba:

lugares: Lugar[] = [
  {
    nombre: 'jp',
    lat: 37.784679,
    lng: -122.395936
  },
  {
    nombre: 'marcos',
    lat: 37.798933,
    lng: -122.377732
  },
  {
    nombre: 'david',
    lat: 37.788578,
    lng: -122.401745
  }
];
  
  constructor(private router: Router ) { }

  ngOnInit() {
    this.cargarMapa()
    
  }

  cargarMapa(){
      const latLng = new google.maps.LatLng(37.784679, -122.395936);
      const mapaOpciones:google.maps.MapOptions = {
          center:latLng,
          zoom:13,
          mapTypeId:google.maps.MapTypeId.ROADMAP
    }
      this.map = new google.maps.Map(this.mapaElement.nativeElement,mapaOpciones)

      for(const lugar of this.lugares){
        this.agregarMarcador(lugar)}
  }

  agregarMarcador(marcador:Lugar){
   console.log(marcador);
   const latLng = new google.maps.LatLng( marcador.lat, marcador.lng );

   const svgMarker = {
    path:
      "M24.43,11.11c0,5.4-7.11,14.22-9.78,14.22S4.87,16.51,4.87,11.11a9.78,9.78,0,0,1,19.56,0Z",
    fillColor: "#E63780",
    fillOpacity:1,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(15, 30),
  };

   const marker = new google.maps.Marker({
     map: this.map,
     animation:google.maps.Animation.BOUNCE,
     position:latLng,
     draggable:true,
     icon: svgMarker,
  

   });
    
   let nombreProvisorio = 'UX/UI'
   const contenido = `<p style="color:#E63780;font-weight:600;">${nombreProvisorio}</p>`;
   const infoWindow = new google.maps.InfoWindow({

       content: contenido
   });

   this.marcadores.push(marker);
   google.maps.event.addDomListener(marker ,'click',()=>{
        
    infoWindow.open( this.map , marker)
   } )


  }




}