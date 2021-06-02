import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {Notification} from 'src/app/entities/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }


  loadNotifications(): Observable<Notification[]>{
    return this.http.get<Notification[]>("https://localhost:44364/api/Notifications");
  }

}


