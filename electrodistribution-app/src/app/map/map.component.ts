import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  
  private map: any;
  private centroid: L.LatLngExpression = [45.267136, 19.833549];

 
  private initMap(): void{
    this.map = L.map('map', {
      center:this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const minja = L.icon({
      iconUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQGcblh7OiDW_Q/profile-displayphoto-shrink_200_200/0/1586350639640?e=1626912000&v=beta&t=G9Nj8ZZI_2dumKftW7backGx799b2CqMR3Z7Izl7hG0',
      iconSize: [25, 41]
      // ...
   });
   const branja = L.icon({
    iconUrl: 'https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.18169-9/11822513_10203322246056209_8113395076672532518_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=vM1A-53ZvXEAX9yu_z9&_nc_ht=scontent.fbeg2-1.fna&oh=c910dade9bdd625f9bbc03540bd7edf0&oe=60C6EFBA',
    iconSize: [25, 41]
    // ...
 });



    tiles.addTo(this.map);


    L.marker([45.242769, 19.838032], {icon:minja}).addTo(this.map).bindPopup("Zivotinje");
    L.marker([45.247469, 19.832979], {icon:branja}).addTo(this.map).bindPopup("Matori");

    //nakon klika na mapu kordinate se smestaju u ove dve promenjice
    var xlng;
    var xlat;

    //klik na mapu
    this.map.on('click', function(e:any){
      console.log(e.latlng.lat,e.latlng.lng);
      xlng=e.latlng.lng
      xlat=e.latlng.lat
    });



  }


  constructor() {
    this.map = "";
   }

  ngOnInit() {
    this.initMap();
    
  }

}
