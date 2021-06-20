import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ElementsService } from '../services/elements.service';
import { SharedService } from '../services/shared/shared.service';
import { Element } from '../entities/element';

@Component({
  selector: 'app-incidents-devices',
  templateUrl: './incidents-devices.component.html',
  styleUrls: ['./incidents-devices.component.css']
})
export class IncidentsDevicesComponent implements OnInit {

  devicesForm = new FormGroup({
    devicesSelected: new FormControl('')
    
  });

  public component = "incident-devices";
  public toNavbar = [this.devicesForm, this.component];

  public allElements : Element[] = [];
  public usedElements : Element[] = [];
 
  public page = 10;
  public pageUsed = 10;
  public pageSize = 3;
  public pageSizeUsed = 3;

  constructor(private router: Router, private _sharedService: SharedService, private elementsService: ElementsService) { }

  ngOnInit(): void {

    this.elementsService.loadElements()
    .subscribe(data => {
        for(let i=0; i<data.length; i++)
        {
          if(data[i].inSafetyDocument === false)
          {
            this.allElements.push(data[i]);
          } else {
            this.usedElements.push(data[i]);
          } 
          
        }
      }
      );

  }

  onSave() {
    //console.log(this.elementForm.value.elementName) 
    //emituj vrijednost u roditeljsku komponentu(NAVBAR)
    let idsStringified = "";
    //prebaci na sledeca polja
    for(var element of this.usedElements) {
      idsStringified += element.id+";";
    }
    console.log(idsStringified);
    this.devicesForm.value.devicesSelected = new FormControl(idsStringified);

    this._sharedService.emitChange(this.toNavbar);
    this.router.navigate(['/incidents/new/resolution']);
  }

  onSelect(elementId : string) {
   console.log(elementId);
   this.usedElements = this.elementsService.moveElementToUsedElements(elementId, this.usedElements);
   this.allElements = this.allElements.filter(item => item.id.toString() != elementId);
   
  }
  onRemove(elementId : string) {
    
   console.log(elementId);
   this.allElements = this.elementsService.moveElementToAllElements(elementId, this.allElements);
   this.usedElements = this.usedElements.filter(item => item.id.toString() != elementId);
   
  }

}
