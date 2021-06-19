import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ElementsService } from 'src/app/services/elements.service';
import { Element } from '../../entities/element';

@Component({
  selector: 'app-create-instruction-sp',
  templateUrl: './create-instruction-sp.component.html',
  styleUrls: ['./create-instruction-sp.component.css']
})
export class CreateInstructionSpComponent implements OnInit {

  instructionForm = new FormGroup({
    action: new FormControl(''),
    element: new FormControl('')
  });

  elements:Element[] = [];

  constructor(public dialogRef: MatDialogRef<CreateInstructionSpComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, private elementService: ElementsService) { }

  ngOnInit(): void {
    this.elementService.loadElements().subscribe(data =>
      this.elements = data
      );
  }

  save() {
    console.log(this.instructionForm.value)
    this.dialogRef.close(this.instructionForm.value);
  }

  cancel(){
    this.dialogRef.close(null);
  }



}
