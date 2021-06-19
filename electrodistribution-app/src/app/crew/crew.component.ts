import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Crew } from '../entities/crew';
import { User } from '../entities/user';
import { CrewService } from '../services/crew/crew.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  id = Math.random().toString(36).substr(2,9);
  crewForm = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(this.id),
  });
  public crew = new Crew();
  public memberCrewUsers : User[] = [];
  public allCrews: Crew[] = [];
  constructor(private userService: UserService, private crewService: CrewService) {
    this.userService.getTeamMembers().subscribe(data => this.memberCrewUsers = data);
    console.log(this.memberCrewUsers.length);
    this.crewService.loadlCrew().subscribe(data => this.allCrews = data);
   }

  ngOnInit() {
  }
  
  addCrewMember(event: any,username:string){
    event.target.disabled = true;
    this.crew.crewMembers = this.crew.crewMembers.concat(" " + username + ";")
  }

  addCrew(){
    this.crew.name = this.crewForm.controls["name"].value;
    this.crew.id = this.crewForm.controls["id"].value;
    console.log(this.crew);
    this.crewService.saveCrew(this.crew); 
    location.reload();
 
  }
  deleteCrew(id: string){
    this.crewService.deleteCrew(id);
    location.reload();

  }
}
