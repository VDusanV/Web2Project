import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private router: Router) { }

logOut(): void {

  localStorage.removeItem("jwt");
  localStorage.removeItem("username");
  this.router.navigate(["home"]);

}

}
