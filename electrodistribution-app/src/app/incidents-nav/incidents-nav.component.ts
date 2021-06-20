import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-incidents-nav',
  templateUrl: './incidents-nav.component.html',
  styleUrls: ['./incidents-nav.component.css']
})
export class IncidentsNavComponent implements OnInit {
  public currentTab = "";
  public activeId = 1;


  constructor(private router: Router, private _sharedService: SharedService) { }

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
    if (this.currentTab === 'document-devices')
    {
      this.activeId = 4;
      //console.log(this.activeId);
    }
    if (this.currentTab === 'checklist')
    {
      this.activeId = 5;
      //console.log(this.activeId);
    }

  }

}
