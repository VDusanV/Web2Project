import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Crew } from '../entities/crew';
import { ElementsService } from '../services/elements.service';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-incidents-crew',
  templateUrl: './incidents-crew.component.html',
  styleUrls: ['./incidents-crew.component.css']
})
export class IncidentsCrewComponent implements OnInit {
  callsForm = new FormGroup({
    crewIds: new FormControl('124;32;23;')
    
  });

  public component = "incident-crew";
  public toNavbar = [this.callsForm, this.component];

  public allCrews : Crew[] = [];
  

  public page = 10;
  public pageSize = 3;


  constructor(private router: Router, private _sharedService: SharedService, private elementsService: ElementsService) { }

  ngOnInit(): void {
    this.allCrews = [{name: "crewName", id:"9e292", crewMembers: "dddd", status: "valid"}]
  }

  onSave() {
    //console.log(this.elementForm.value.elementName) 
    //emituj vrijednost u roditeljsku komponentu(NAVBAR)
    
    this._sharedService.emitChange(this.toNavbar);
    this.router.navigate(['/incidents/new/incident-multimedia-attachments']);
  }

}
