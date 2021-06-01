import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import {UserService } from '../services/user/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username!: string;
  fullname!: string;
  birthdate!: Date;
  address!: string;
  email!: string;
  userType!: string;

  userTypes = [
    {name: "TeamMember"},
    {name: "Dispatcher"},
    {name: "Worker"},
    {name: "Admin"}
  ]

  control!: FormControl;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getCurrentUser().subscribe(
      data => {
        this.username = data.username;
        this.fullname = data.nameAndLastname;
        this.birthdate = data.birthdate;
        this.address = data.address;
        this.email = data.email;
        this.control = new FormControl(data.userType);
      }, 
      err => {

      }
    )
    
  }

  get selectOptions(){
    return this.userTypes.map(({name})=>name);
  }
}

