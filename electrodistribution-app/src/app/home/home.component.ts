import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

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
          { title: 'Ne znam cemu ovo sluzi', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Moji planovi', cols: 2, rows: 1 },
        { title: 'Moji incidenti', cols: 1, rows: 1 },
        { title: 'Moji bezbednosni dokumenti', cols: 1, rows: 2 },
        { title: 'Moji nalozi za rad', cols: 1, rows: 1 }
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
