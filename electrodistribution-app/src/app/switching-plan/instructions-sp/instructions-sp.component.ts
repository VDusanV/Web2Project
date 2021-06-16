import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { SwpInteractionService } from 'src/app/services/switching-plan/swp-interaction.service';

@Component({
  selector: 'app-instructions-sp',
  templateUrl: './instructions-sp.component.html',
  styleUrls: ['./instructions-sp.component.css']
})
export class InstructionsSpComponent implements OnInit {

  form!:FormGroup


  constructor(private rootFormGroup: FormGroupDirective, private router:Router, private swpService:SwpInteractionService) { }

  ngOnInit(): void {
  }


  save(){
    if(this.validate()){
      console.log("tu sam")
      this.router.navigate(['/switching-plans/new/history-state']);
    }
  }

  validate(): boolean{
    return true;
  }

  back(){
    this.swpService.sendMessage(4);
    this.router.navigate(['/switching-plans/new/equipment']);
  }

}
