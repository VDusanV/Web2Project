import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-incidents-basic-info',
  templateUrl: './incidents-basic-info.component.html',
  styleUrls: ['./incidents-basic-info.component.css']
})
export class IncidentsBasicInfoComponent implements OnInit {
  public priorityFromDevices = 1;
  public affectedCustomersFromDevice = 7;
  public callsFromDB = 5;
  public voltageFromDB = 13.3;
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;


  basicInfoForm = new FormGroup({
    elementType: new FormControl(''),
    priority: new FormControl(this.priorityFromDevices),
    confirmed: new FormControl(false),
    status: new FormControl('Dispatched'),
    description: new FormControl(''),
    ETA: new FormControl(''),
    ATA: new FormControl(''),
    affectedCustomers: new FormControl(this.affectedCustomersFromDevice),
    outageTime: new FormControl("nekiDatum"),
    ETR: new FormControl(''),
    calls: new FormControl(this.callsFromDB),
    voltage: new FormControl(this.voltageFromDB),
    scheduledTime: new FormControl(''),
    
    
    
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
    this.router.navigate(['/incidents/new/incident-devices']);
  }

}
