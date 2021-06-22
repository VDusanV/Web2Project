import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { IncidentModel } from '../entities/incidentModel';
import { SafetyDocumentsService } from '../services/safety-documents/safety-documents.service';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-incidents-nav',
  templateUrl: './incidents-nav.component.html',
  styleUrls: ['./incidents-nav.component.css']
})
export class IncidentsNavComponent implements OnInit {
  public currentTab = "";
  public activeId = 1;
  incidentModel: IncidentModel;

  constructor(private router: Router, private _sharedService: SharedService, private _safetyDocumentsService: SafetyDocumentsService) { 
    this.incidentModel = new IncidentModel();
    
    _sharedService.changeEmitted$.subscribe(  //kad na Basic information kliknem SAVE -> ovdje udjem. 
      text => {
          console.log(text[0].value, text[1]);
          if (text[1] === 'basic-info')
          {
            console.log("basic infoo usao sam ovdje oo");
            //prebaciti u servis
            this.incidentModel = new IncidentModel("id", text[0].value.scheduledTime, "dispatched");
                                                     
            console.log(JSON.stringify(this.incidentModel) + "ovo je sejfti")
          }
          
          if (text[1] === 'incident-multimedia-attachments')
          {
           
            
            console.log("tu sam")
            //send to backend

            /*let sdTest = new SafetyDocument("id", "tip", "status", "plan", "doctype", "datecreated", "by", "numb", "fieldcr", "det",
              "notes", "novost", "usersthatchang", "file", "devsel", true, false, false, true);*/
            this._safetyDocumentsService.saveIncident(this.incidentModel);


            
          }    
        }
    )

  }

  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
         
         this.routerChangeMethod(event.url);
         
      }
   })
  }

  routerChangeMethod(url : any){
    let urlSplit = url.split("/");
    this.currentTab =urlSplit[3];
    //console.log(this.currentTab);

    if (this.currentTab === 'basic-info')
    {
      this.activeId = 1;
      //console.log(this.activeId);
    } 
    if (this.currentTab === 'incident-devices')
    {
      this.activeId = 2;
      //console.log(this.activeId);
    }
    if (this.currentTab === 'resolution')
    {
      this.activeId = 3;
      //console.log(this.activeId);
    }
    if (this.currentTab === 'calls')
    {
      this.activeId = 4;
      //console.log(this.activeId);
    }
    if (this.currentTab === 'incident-crew')
    {
      this.activeId = 5;
      //console.log(this.activeId);
    }
    if (this.currentTab === 'incident-multimedia-attachments')
    {
      this.activeId = 6;
      //console.log(this.activeId);
    }

  }

}
