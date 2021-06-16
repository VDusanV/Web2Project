import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { SwpInteractionService } from 'src/app/services/switching-plan/swp-interaction.service';

@Component({
  selector: 'app-multimedia-sp',
  templateUrl: './multimedia-sp.component.html',
  styleUrls: ['./multimedia-sp.component.css']
})
export class MultimediaSpComponent implements OnInit {

  form!:FormGroup;
  progress: any;
  message: any;
  imagePath1!: {dbPath: ''};


  image: string = "";


  constructor(private rootFormGroup: FormGroupDirective, private router:Router, private http:HttpClient, private swpService:SwpInteractionService) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get('multimedia') as FormGroup
  }


  save(){
    if(this.validate()){
      console.log("tu sam")
      this.swpService.sendMessage(4);
      this.router.navigate(['/switching-plans/new/equipment']);
    }
  }

  validate(): boolean{
    return true;
  }

  back(){
    this.swpService.sendMessage(2);
    this.router.navigate(['/switching-plans/new/history-state']);
  }



  ///IMAGE

  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);


    this.http.post('https://localhost:44364/api/User/Upload', formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
      {
          const total: number = <number>event.total;  
          this.progress = Math.round(100 * event.loaded / total);
      }
        else if (event.type === HttpEventType.Response) {
          console.log(event.body);
          this.imagePath1 = event.body as {dbPath: ''};
          this.image = this.imagePath1.dbPath;
          this.form.value.imageData = this.image;
          console.log(this.form.value.imageData)
        }
    });


  }

  imagePath(path:string): string {
    if(!(path === "")){
    const retVal = 'https://localhost:44364/' + path;
    return retVal;
    }else{
      return "";
    }
  }

}
