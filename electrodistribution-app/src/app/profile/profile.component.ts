import { Component, OnInit } from '@angular/core';
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
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getCurrentUser().subscribe(
      data => {
        this.username = data.username;
        this.fullname = data.nameAndLastname;
        this.birthdate = data.birthdate;
        this.address = data.address;
      }, 
      err => {

      }
    )


  }

}