import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { SwpInteractionService } from 'src/app/services/switching-plan/swp-interaction.service';

@Component({
  selector: 'app-basic-info-sp',
  templateUrl: './basic-info-sp.component.html',
  styleUrls: ['./basic-info-sp.component.css']
})
export class BasicInfoSpComponent implements OnInit {

  form!: FormGroup

  @Output() newItemEvent = new EventEmitter<string>();


  constructor(private rootFormGroup: FormGroupDirective, private router:Router, private swpService:SwpInteractionService ) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get('basicInfo') as FormGroup
  }

  addNewItem(value: number) {
    this.newItemEvent.emit('2');
  }

  save(){
    if(this.validate()){
      console.log("tu sam, saljem poruku na navbar");
      this.swpService.sendMessage(2);
      this.router.navigate(['/switching-plans/new/history-state']);
    }

  }

  validate():boolean {
    return true;
  }

}
