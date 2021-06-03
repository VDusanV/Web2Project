import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import {Notification} from 'src/app/entities/notification';

import {NotificationService} from 'src/app/services/notifications/notification.service';
import { element } from 'protractor';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[] = [];
  page = 10;
  pageSize = 4;


  constructor(private notService:NotificationService, private router:Router, private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.notService.loadNotifications().subscribe
      (data => { this.notifications = data});

  }

finish(id:Number){
  console.log(id);
  this.notService.modifyNotifcation(id);
}

getBackgroundColor(type:string){
  
  if(type === "Success")
  {
  return {'background-color' : 'lightgreen'};
  console.log(type);
  }else if(type === "Warning")
  {
  return {'background-color' : 'lightsalmon'};
  console.log(type);
  }else if(type === "Info")
  {
    return {'background-color' : 'lightblue'};
    console.log(type);
  }else
  {
      return {'background-color' : 'orangered'};
      console.log(type);
  }
}

}
