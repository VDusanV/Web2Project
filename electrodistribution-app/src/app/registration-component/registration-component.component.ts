import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})



export class RegistrationComponentComponent implements OnInit {
  imageUrl="/assets/default-picture.png";
  fileToUpload : any;
  invalidLogin!: boolean;
  selectedFile : any = null; 
  credentials : any;
  files: any;
  progress: any;
  message: any;
  imagePath!: {dbPath: ''};
  confirmPass=false;
  pass2 = "";
  pass1 = "";


  @Output() public onUploadFinished = new EventEmitter();

  constructor(private router: Router, private http: HttpClient) { 
  
  }
  //citanje slike
  handleFileInput(event : Event){
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
 
      this.fileToUpload = fileList?.item(0)

      var reader = new FileReader();
      reader.onload = (eventt:any) =>{
        this.imageUrl = eventt.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);

    }

  //register
  public register = (form: NgForm) => {
    if(this.pass1 != this.pass2){
      this.confirmPass=true;
      return;
    }
    console.log( " rrrrr " + this.pass1 + " rrrrr "  +this.pass2 +  " rrrrr ");
    console.log( "eee"+ form.value.imagedata);
    form.value.imagedata = this.imagePath.dbPath;
     this.credentials = JSON.stringify(form.value);

    this.http.post("https://localhost:44364/api/User/Register", this.credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      const username = (<any>response).username;
      localStorage.setItem("username", username);
      this.invalidLogin = false;
      this.router.navigate(["home"]);
    }, err => {
      this.invalidLogin = true;
    });
  }



  ngOnInit() {
  }

  //slanje slike
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
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
          console.log(event.body);
          this.imagePath = event.body as {dbPath: ''};
          console.log(this.imagePath);
        }
    });


  }
}