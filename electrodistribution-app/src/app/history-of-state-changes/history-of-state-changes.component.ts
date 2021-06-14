import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation/navigation.service';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-history-of-state-changes',
  templateUrl: './history-of-state-changes.component.html',
  styleUrls: ['./history-of-state-changes.component.css']
})
export class HistoryOfStateChangesComponent implements OnInit {

  elementForm = new FormGroup({
    elementName: new FormControl(''),
    elementAddress: new FormControl(''),
  });

  constructor(private _sharedService: SharedService, private router: Router, 
              private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  onSave() {
    //console.log(this.elementForm.value.elementName) 
    this._sharedService.emitChange(this.elementForm.value.elementName);
    this.navigationService.navigation.next(false); //da bi se ponovo prikazao content safety docs komponente
    this.router.navigate(['/safety-documents/']);
  }


}
