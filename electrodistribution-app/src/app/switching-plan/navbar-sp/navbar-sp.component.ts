import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SwpInteractionService } from 'src/app/services/switching-plan/swp-interaction.service';

@Component({
  selector: 'app-navbar-sp',
  templateUrl: './navbar-sp.component.html',
  styleUrls: ['./navbar-sp.component.css'],
  template: `<app-basic-info-sp (newItemEvent)='updateItem($event)'></app-basic-info-sp>`
})
export class NavbarSpComponent implements OnInit {
  spForm!: FormGroup;
  activeId = 1;

  constructor(private fb: FormBuilder, private swpService: SwpInteractionService) { }

  ngOnInit(): void {
    this.spForm = this.fb.group({
      basicInfo: this.fb.group({
        type: [],
        workRequest: [],
        status: [],
        incident: [],
        street: [],
        startDate: [],
        endDate: [],
        crew: [],
        createdBy: [],
        notes: [],
        company: [],
        phoneNo: [],
        dateCreated: []
      }),
      historyState: this.fb.group({
        dateChange: [],
        changedBy: [],
        newStatus: [],
      }),
      multimedia: this.fb.group({
        imageData: []
      }),
      equipment: this.fb.group({
        equipmentId: []
      })
    })

    this.swpService.currentActiveId$
      .subscribe(
        message => {
          console.log(message);
          this.activeId = message;
        }
      );

  }

  updateItem(newId:number){
    console.log("pokusavam");
    this.activeId = newId;
  }

}
