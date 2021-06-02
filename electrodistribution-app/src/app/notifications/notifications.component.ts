import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import {Notification} from 'src/app/entities/notification';

import {NotificationService} from 'src/app/services/notifications/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[] = [];
  page = 10;
  pageSize = 2;


  constructor(private notService:NotificationService, private router:Router, private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.notService.loadNotifications().subscribe
      (data => { this.notifications = data});

  }

finish(){
  console.log(this.notifications);
  
}

}
