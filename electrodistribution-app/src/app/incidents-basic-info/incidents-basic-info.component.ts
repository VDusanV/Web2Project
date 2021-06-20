import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-incidents-basic-info',
  templateUrl: './incidents-basic-info.component.html',
  styleUrls: ['./incidents-basic-info.component.css']
})
export class IncidentsBasicInfoComponent implements OnInit {

  basicInfoForm = new FormGroup({
    elementType: new FormControl(''),
    status: new FormControl('Draft'),
    switchingPlan: new FormControl('plan-id'),
    //safetyDocType: new FormControl(''),
    dateCreated: new FormControl(new Date().toLocaleDateString()),
    createdByUser: new FormControl(localStorage.username),
    phoneNum: new FormControl(''),
    fieldCrew: new FormControl('crew-id'),
    details: new FormControl(''),
    notes: new FormControl(''),
    
  });    

  public userCreated = "";
  public component = "basic-info";
  public toNavbar = [this.basicInfoForm, this.component];
 

  constructor(private router: Router, private _sharedService: SharedService) { }

  ngOnInit(): void {
    console.log(localStorage.username);
    this.userCreated = localStorage.username;
    
  }

  onSave() {
    //console.log(this.elementForm.value.elementName) 
    //emituj vrijednost u roditeljsku komponentu(NAVBAR)
    
    //prebaci na sledeca polja

    this._sharedService.emitChange(this.toNavbar);
    this.router.navigate(['/safety-documents/new/history-of-state-changes']);
  }

}
