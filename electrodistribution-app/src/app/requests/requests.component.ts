import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public allUsers : User[] = [];
  public page = 10;
  public pageSize = 5;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.loadUserRequests().subscribe(data => this.allUsers = data);
  }
  activate(username:string){
    this.userService.activateUser(username);
    location.reload();
  }

}
