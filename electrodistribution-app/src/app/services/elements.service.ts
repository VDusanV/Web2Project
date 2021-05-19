import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Element } from 'src/app/entities/element';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

 
  constructor(private http: HttpClient) {
    
  }


  loadElements(): Observable<IElement[]>{
    return this.http.get<IElement[]>("https://localhost:44364/api/Elements");


    
  }


}

export interface IElement {
    type: string;
    id: number;
    name: string;
    address: string;
    coordinates: string;

}

