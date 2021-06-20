import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.css']
})
export class ResolutionComponent implements OnInit {

  resolutionForm = new FormGroup({
    
    
    cause: new FormControl(''),
    subcause: new FormControl(''),
    constructionType: new FormControl(''),
    material: new FormControl(''),
    
  });

  public component = "resolution";
  public toNavbar = [this.resolutionForm, this.component];

  constructor(private router: Router, private _sharedService: SharedService) { }

  ngOnInit(): void {
  }


  onSave() {
    //console.log(this.elementForm.value.elementName) 
    //emituj vrijednost u roditeljsku komponentu(NAVBAR)
    
    //prebaci na sledeca polja

    this._sharedService.emitChange(this.toNavbar);
    this.router.navigate(['/incidents/new/calls']);
  }

}
