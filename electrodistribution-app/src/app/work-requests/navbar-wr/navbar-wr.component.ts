import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { WorkRequest } from 'src/app/entities/work-request';
import { WorkRequestsService } from 'src/app/services/work-requests/work-requests.service';

@Component({
  selector: 'app-navbar-wr',
  templateUrl: './navbar-wr.component.html',
  styleUrls: ['./navbar-wr.component.css']
})
export class NavbarWrComponent implements OnInit {
  activeId = 1;
  public currentTab = "";
  workRequest: WorkRequest;

  constructor(private router: Router,private _workService: WorkRequestsService ) {
    this.workRequest = new WorkRequest();
    console.log("uso sam u navbar work requests");
    _workService.changeEmitted$.subscribe(
      text=>{
        console.log("hahahah" + text[0].value, text[1]);
        if (text[1] === 'basic-info')
        {
          this.workRequest.type = text[0].value.type;
          this.workRequest.status = text[0].value.status;
          this.workRequest.incident = text[0].value.incident;
          this.workRequest.street = text[0].value.street;
          this.workRequest.startDate = text[0].value.startDate;
          this.workRequest.endDate = text[0].value.endDate;
          this.workRequest.createdByUser = text[0].value.createdByUser;
          this.workRequest.purpose = text[0].value.purpose;
          this.workRequest.phoneNum = text[0].value.phoneNum;
          this.workRequest.company = text[0].value.company;
          this.workRequest.details = text[0].value.details;
          this.workRequest.notes = text[0].value.notes;
          this.workRequest.dateCreated = text[0].value.dateCreated;


         // console.log("aaaa" + this.workRequest.type);
         // console.log("aaaasss" +JSON.stringify( this.workRequest));

        }
        else if(text[1] === 'history'){
          this.workRequest.state = text[0].value.state;
          console.log("kkkk" + this.workRequest.state);
        }
        else if(text[1] === 'multimedia'){
          this.workRequest.file = text[0].value.file;
          console.log("ooo" + this.workRequest.file);
        }
      }

    )
   }

  ngOnInit() {
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
    if (this.currentTab === 'history')
    {
      this.activeId = 2;
      //console.log(this.activeId);
    }
    if (this.currentTab === 'multimedia')
    {
      this.activeId = 3;
      //console.log(this.activeId);
    }
    if (this.currentTab === 'equipment')
    {
      this.activeId = 4;
      //console.log(this.activeId);
    }

  }

}
