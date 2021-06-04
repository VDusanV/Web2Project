import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

 

  constructor(private router:Router, private http:HttpClient, private userService:UserService) { }

  changePassword(form:NgForm){
    const credentials = JSON.stringify(form.value);
    this.userService.changeUserPassword(credentials);
    localStorage.clear();
    this.router.navigate(["home"]);
  }




  ngOnInit(): void {

  }

}
