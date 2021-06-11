import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import {UserService } from '../services/user/user.service';
import { User } from '../entities/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  /*username!: string;
  fullname!: string;
  birthdate!: Date;
  address!: string;
  email!: string;
  userType!: string;*/

  userTypes = [
    {name: "TeamMember"},
    {name: "Dispatcher"},
    {name: "Worker"},
    {name: "Admin"}
  ]

  //control!: FormControl;

  user!:User;

  date!:string;

  profileForm =new FormGroup({
    username: new FormControl(''),
    fullname: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    userType: new FormControl('')
  });
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getCurrentUser().subscribe(
      data => {
        this.profileForm.setValue({
          username: data.username,
          fullname: data.nameAndLastname,
          address: data.address,
          email: data.email,
          userType: data.userType
        })
        this.date = data.birthdate;
      }, 
      err => {

      }
    )

    
  }

  onSubmit(){
    if(this.validate()){
      this.user = new User(
        this.profileForm.controls.username.value,
        this.profileForm.controls.email.value,
        'a',
        this.profileForm.controls.fullname.value,
        this.profileForm.controls.address.value,
        this.date,
        this.profileForm.controls.userType.value,
      );

      this.userService.changeProfile(this.user);

    }

  }

  validate():boolean{
    return true;
  }

  get selectOptions(){
    return this.userTypes.map(({name})=>name);
  }
}

