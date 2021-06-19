import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Consumer } from 'src/app/entities/consumer';
import { Router } from '@angular/router';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { ConsumerService } from 'src/app/services/consumer/consumer.service';

@Component({
  selector: 'app-new-consumer',
  templateUrl: './new-consumer.component.html',
  styleUrls: ['./new-consumer.component.css']
})
export class NewConsumerComponent implements OnInit {

  consumerForm!:FormGroup;

  constructor(private fb: FormBuilder, private consumerService:ConsumerService, private router:Router) { }

  ngOnInit(): void {

    this.consumerForm = this.fb.group({
        name: [],
        surname: [],
        street: [],
        city: [],
        postal: [],
        phone: [],
        type: []
    })
  }


  save(){
    if(this.validate()){
      let consumer = new Consumer(this.consumerForm.controls.name.value, this.consumerForm.controls.surname.value, 
        this.consumerForm.controls.street.value, this.consumerForm.controls.city.value, this.consumerForm.controls.postal.value,
        this.consumerForm.controls.phone.value, this.consumerForm.controls.type.value);

      this.consumerService.saveConsumer(consumer);
      this.consumerService.setIdValue(-1);
      this.router.navigate(['/consumers']);
      
      }
  }

  validate():boolean{
    return true;
  }

}
