import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SwpInteractionService } from 'src/app/services/switching-plan/swp-interaction.service';
import { SwitchingPlan } from 'src/app/entities/switchingPlan';
import { DocumentService } from 'src/app/services/document/document.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-navbar-sp',
  templateUrl: './navbar-sp.component.html',
  styleUrls: ['./navbar-sp.component.css'],
  template: `<app-basic-info-sp (newItemEvent)='updateItem($event)'></app-basic-info-sp>`
})
export class NavbarSpComponent implements OnInit {
  spForm!: FormGroup;
  activeId = 1;
  documentId: number = -1;
  switchingPlan!:SwitchingPlan;

  constructor(private http: HttpClient, private fb: FormBuilder, private swpService: SwpInteractionService, private documentService: DocumentService) { }

  ngOnInit(): void {
    this.swpService.currentActiveId$
      .subscribe(
        message => {
          console.log('NavBarId: ' + message);
          this.activeId = message;
        }
      );


    this.spForm = this.fb.group({
      basicInfo: this.fb.group({
        id: [],
        type: [],
        workRequest: [],
        status: 'Draft',
        incident: [],
        street: [],
        startDate: [],
        endDate: [],
        crew: [],
        createdBy: localStorage.getItem('username'),
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
    console.log('DocId: ' + this.swpService.getIdValue());

    this.documentId = this.swpService.getIdValue();

    if(this.documentId != null){
      console.log('Popunjena forma')
      this.http.get("https://localhost:44364/api/Document/GetSwitchingPlan?id="+this.documentId).subscribe(
        data => {
          this.switchingPlan = data as SwitchingPlan;

          this.spForm.setValue({
            basicInfo: {
              id: this.switchingPlan.id,
              type: this.switchingPlan.type,
              workRequest: this.switchingPlan.workRequest,
              status: this.switchingPlan.status,
              incident: this.switchingPlan.incident,
              street: this.switchingPlan.street,
              startDate: this.switchingPlan.startDate,
              endDate: this.switchingPlan.endDate,
              crew: this.switchingPlan.crew,
              createdBy: this.switchingPlan.createdBy,
              notes: this.switchingPlan.notes,
              company: this.switchingPlan.company,
              phoneNo: this.switchingPlan.phone,
              dateCreated: this.switchingPlan.dateCreated
            },
            historyState: {
              dateChange: [],
              changedBy: [],
              newStatus: [],
            },
            multimedia: {
              imageData: this.switchingPlan.imageData
            },
            equipment: {
              equipmentId: this.switchingPlan.equipment
            }
          })

        }
      )
      console.log(this.switchingPlan);
    }else{
      console.log('Prazna forma');
    }
    

  }

  updateItem(newId:number){
    console.log("pokusavam");
    this.activeId = newId;
  }

}
