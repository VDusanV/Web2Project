import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { WorkRequest } from '../entities/work-request';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Map', cols: 2, rows: 2 },
          { title: 'My Work Requests', cols: 2, rows: 2 },
          { title: 'Card 3', cols: 2, rows: 2 },
          { title: 'Card 4', cols: 2, rows: 2 }
        ];
      }

      return [
        { title: 'Map', cols: 1, rows: 2 },
        { title: 'My Work Requests', cols: 1, rows: 2 },
        { title: 'Moji bezbednosni dokumenti', cols: 1, rows: 2 },
        { title: 'Crews', cols: 1, rows: 2 }
      ];
    })
  );

  constructor(private jwtHelper: JwtHelperService, private router: Router, private breakpointObserver: BreakpointObserver) {
  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt")!;
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem("jwt");
  }
}
