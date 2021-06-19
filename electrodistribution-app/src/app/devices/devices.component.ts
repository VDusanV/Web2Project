import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementsService } from '../services/elements.service';
import { SharedService } from '../services/shared/shared.service';
import { Element } from '../entities/element';
import { element } from 'protractor';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  public component = "devices";
  public toNavbar = ["", this.component];

  public allElements : Element[] = [];
  public usedElements : Element[] = [];
  allElementsList: Element[][];
  public page = 10;
  public pageSize = 3;
  
  constructor(private router: Router, private _sharedService: SharedService, private elementsService: ElementsService) { 
    this.allElementsList = new Array<Array<Element>>();

  }

  ngOnInit(): void {
    this.elementsService.loadElements()
    .subscribe(data => this.allElements = data);
    this.usedElements = this.elementsService.loadUsedElements(this.allElements);
    
  }


  onSave() {
    //console.log(this.elementForm.value.elementName) 
    //emituj vrijednost u roditeljsku komponentu(NAVBAR)
    
    //prebaci na sledeca polja

    this._sharedService.emitChange(this.toNavbar);
    this.router.navigate(['/safety-documents/new/checklist']);
  }

  onSelect(elementId : string) {
   console.log(elementId);
   this.usedElements = this.elementsService.moveElementToUsedElements(elementId, this.usedElements);
 
  }

}
