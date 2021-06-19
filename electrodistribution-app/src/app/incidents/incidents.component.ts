import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Incident } from '../entities/incident';
import { IncidentService } from '../services/incident-service/incident.service';
import { NavigationService } from '../services/navigation/navigation.service';






@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent  implements OnInit{
  public displayIncidentContent = true;

  constructor(private incidentService: IncidentService, private navigationService: NavigationService, private cdref: ChangeDetectorRef) { 
    
  }
  ngOnInit(): void {
    
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
      }
    });
  }

}
