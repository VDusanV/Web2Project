import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwpInteractionService {

  private activeId = new Subject<number>();
  currentActiveId$ = this.activeId.asObservable();

  constructor() { }

  sendMessage(message: number){
    this.activeId.next(message);
  }

}
