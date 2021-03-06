import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.css']
})
export class NavSideComponent {

  titleString ='';
  username = localStorage.username;
  isAdmin:boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private loginService: LoginService) {}

  ngOnInit(): void {
    const type = localStorage.getItem('type');
    if(type === 'Admin'){
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
    }
    console.log(this.isAdmin);
  }

  myFunc(str: string){
    this.titleString = str;
  }

  logOut(): void {

  this.loginService.logOut();
  this.isAdmin = false;


  }
}
