import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation/navigation.service';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;


  public component = "checklist";
  public toNavbar = ["", this.component];

  constructor(private router: Router, private _sharedService: SharedService, private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  onSave() {
    //console.log(this.elementForm.value.elementName) 
    this._sharedService.emitChange(this.toNavbar);
    this.navigationService.navigation.next(false); //da bi se ponovo prikazao content safety docs komponente
    this.router.navigate(['/safety-documents/']);
  }

}
