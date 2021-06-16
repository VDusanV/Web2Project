import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { SwpInteractionService } from 'src/app/services/switching-plan/swp-interaction.service';

@Component({
  selector: 'app-history-sp',
  templateUrl: './history-sp.component.html',
  styleUrls: ['./history-sp.component.css']
})
export class HistorySpComponent implements OnInit {

  form!: FormGroup

 

  constructor(private rootFormGroup: FormGroupDirective, private router:Router, private swpService: SwpInteractionService) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get('historyState') as FormGroup
   
  }

  

  save(){
    if(this.validate()){
      console.log("tu sam")
      this.router.navigate(['/switching-plans/new/multimedia']);
      this.swpService.sendMessage(3);
    }
  }

  validate(): boolean{
    return true;
  }

  back(){
    this.router.navigate(['/switching-plans/new/basic-info']);
    this.swpService.sendMessage(1);
  }

}
