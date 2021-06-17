import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  public component = "devices";
  public toNavbar = ["", this.component];


  constructor(private router: Router, private _sharedService: SharedService) { }

  ngOnInit(): void {
  }


  onSave() {
    //console.log(this.elementForm.value.elementName) 
    //emituj vrijednost u roditeljsku komponentu(NAVBAR)
    
    //prebaci na sledeca polja

    this._sharedService.emitChange(this.toNavbar);
    this.router.navigate(['/safety-documents/new/checklist']);
  }

}
