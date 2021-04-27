import { Injectable } from '@angular/core';
import { IncidentType } from 'src/app/entities/enums/incident-type.enum';
import { Incident } from 'src/app/entities/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

constructor() { }

 loadIncidents(){
   return this.mockedIncidents();
 }

 mockedIncidents(){
   //iz ove funkcije dovlacimo sa servera podatke, ovo su samo fejk radi fronta
   let allIncidents = new Array<Incident>();

   const i1 = new Incident("123",IncidentType.Planned,1,false,"status1","12:30","13:30","30","15:00",10000,4,1000,"30.2.2021");
   const i2 = new Incident("223",IncidentType.Planned,1,false,"status2","12:30","13:30","30","15:00",10000,4,1000,"30.2.2021");
   const i3 = new Incident("323",IncidentType.Planned,1,false,"status3","12:30","13:30","30","15:00",10000,4,1000,"30.2.2021");
   const i4 = new Incident("423",IncidentType.Planned,1,false,"status4","12:30","13:30","30","15:00",10000,4,1000,"30.2.2021");
   const i5 = new Incident("523",IncidentType.Planned,1,false,"status5","12:30","13:30","30","15:00",10000,4,1000,"30.2.2021");

  allIncidents.push(i1);
  allIncidents.push(i2);
  allIncidents.push(i3);
  allIncidents.push(i4);
  allIncidents.push(i5);

  return allIncidents;
 }
}
