import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { isJSDocThisTag } from 'typescript';
import { Incident } from '../entities/incident';
import { IncidentModel } from '../entities/incidentModel';
import { IncidentService } from '../services/incident-service/incident.service';
import { NavigationService } from '../services/navigation/navigation.service';
import { SafetyDocumentsService } from '../services/safety-documents/safety-documents.service';






@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent  implements OnInit{
  public displayIncidentContent = true;

  public allIncidents: IncidentModel[] = [];

  public page = 10;
  public pageSize = 3;
  

  constructor(private incidentService: IncidentService, private navigationService: NavigationService, private cdref: ChangeDetectorRef, private _safetyDocumentsService: SafetyDocumentsService) { 
    
  }
  ngOnInit(): void {
    this.allIncidents = [{incidentId: "dsam3232d23", startDate: "22/3/2019", status: "dispatched"},{incidentId: "20203dmdsa", startDate: "4/5/2021", status: "dispatched"},{incidentId: "dmasm29dka2", startDate: "22/3/2021", status: "dispatched"},
    {incidentId: "dasdsma304ms", startDate: "5/6/2019", status: "dispatched"}
  ]

   // this._safetyDocumentsService.loadIncident()
    //.subscribe(data => this.allIncidents = data);
    //console.log(this.allIncidents);
  }

  ngAfterContentChecked() {

    this.onGetDisplayContent();
    this.cdref.detectChanges();
    
  }

  onGetDisplayContent(){
    //console.log("kliknuo");
    this.navigationService.navigation$.subscribe((isreached)=>{
      if(isreached){
         this.displayIncidentContent = false;
         //console.log('isreached je true i emitovao sam observable')
      } else 
      {
        this.displayIncidentContent = true;

        //this._safetyDocumentsService.loadIncident()
          //                      .subscribe(data => this.allIncidents = data);
      }
    });
  }

}
