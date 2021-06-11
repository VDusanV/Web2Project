import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Street } from 'src/app/entities/street';
import { ChangePriority } from 'src/app/entities/streetPriority';



@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  


  loadStreets(): Observable<Street[]>{
    return this.http.get<Street[]>("https://localhost:44364/api/Settings/GetStreets");
  }

  
    changePriority(value:Street){
      
      this.http.put<Street>("https://localhost:44364/api/Settings/ChangePriority", value)
      .subscribe(
        error => console.log('oops', error)
      );
      }


  private header = new HttpHeaders({ 'content-type': 'application/json' });
  
  visibleNotifications(value:string[]){
        const credentials = JSON.stringify(value);
        this.http.put("https://localhost:44364/api/Settings/VisibleNotifications", credentials, {headers : this.header})
        .subscribe(
          error => console.log('oops', error)
        );
        }


}