import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Crew } from '../entities/crew';
import { CrewService } from '../services/crew/crew.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public maxLat = 45.26;
  public minLat = 45.23;
  public maxLng =19.8;
  public minLng = 19.75;
  private map: any;
  private centroid: L.LatLngExpression = [45.267136, 19.833549];
  public allCrews: Crew[] = [];

 
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

    const crew = L.icon({
      iconUrl: '/assets/crew.png',
      iconSize: [41, 25]
      // ...
   });
   const incident = L.icon({
    iconUrl: '/assets/incident.png',
    iconSize: [25, 25]
    // ...
 });



    tiles.addTo(this.map);


    console.log("mapaaa " + this.allCrews.length);

    this.allCrews.forEach(element => {
      const lng = this.randomLngFromInterval(this.minLng,this.maxLng);
      const lat = this.randomLatFromInterval(this.minLat,this.minLat);
     L.marker([lat, lng], {icon:crew}).addTo(this.map).bindPopup("Name of crew: " + element.name + ", Id: " + element.id);
      
    });

    L.marker([ 45.23542467770837, 19.810201331843633], {icon:incident}).addTo(this.map).bindPopup("Incident id: Inc1, Priority: 2");
    L.marker([45.28247091404771, 19.876006701124208], {icon:incident}).addTo(this.map).bindPopup("Incident id: Inc2, Priority: 5");
    L.marker([45.28031633188242, 19.782101876509856], {icon:incident}).addTo(this.map).bindPopup("Incident id: Inc3, Priority: 1");
    L.marker([45.25330530572664, 19.760462938660375], {icon:incident}).addTo(this.map).bindPopup("Incident id: Inc4, Priority: 2");
    L.marker([ 45.302719979032716, 19.82293006113152], {icon:incident}).addTo(this.map).bindPopup("Incident id: Inc5, Priority: 3");


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


  constructor(private crewService: CrewService) {
    this.map = "";
   }

  ngOnInit() {
    this.crewService.loadlCrew().subscribe(data => {this.allCrews = data as Crew[]
      console.log(this.allCrews);
    
      this.initMap();
    });
   

    
  }
   randomLatFromInterval(minLat:number, maxLat:number) { // min and max included 
    return ((Math.random()/10) * (minLat - maxLat + 1) + minLat)
  }
  randomLngFromInterval(minLng:number, maxLng:number) { // min and max included 
    return ((Math.random()/10) * (minLng - maxLng + 1) + minLng)
  }
}
