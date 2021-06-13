import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import {UserService } from '../services/user/user.service';
import { User } from '../entities/user';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  /*username!: string;
  fullname!: string;
  birthdate!: Date;
  address!: string;
  email!: string;
  userType!: string;*/

  userTypes = [
    {name: "TeamMember"},
    {name: "Dispatcher"},
    {name: "Worker"},
    {name: "Admin"}
  ]

  //control!: FormControl;

  progress: any;
  message: any;
  imagePath1!: {dbPath: ''};

  user!:User;

  date!:string;

  image: string = "";

  profileForm =new FormGroup({
    username: new FormControl(''),
    fullname: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    userType: new FormControl(''),
    imageData: new FormControl('')
  });
  
  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {

    this.userService.getCurrentUser().subscribe(
      data => {
        this.image = data.imageData;
        this.profileForm.setValue({
          username: data.username,
          fullname: data.nameAndLastname,
          address: data.address,
          email: data.email,
          userType: data.userType,
          imageData: data.imageData
        })
        this.date = data.birthdate;
        console.log(this.profileForm.value.path);
      }, 
      err => {

      }
    )
    
    
    
  }

  onSubmit(){
    if(this.validate()){
      this.user = new User(
        this.profileForm.controls.username.value,
        this.profileForm.controls.email.value,
        'a',
        this.profileForm.controls.fullname.value,
        this.profileForm.controls.address.value,
        this.date,
        this.profileForm.controls.userType.value,
      );
      this.user.imageData = this.image;
      this.userService.changeProfile(this.user);

    }

  }

  validate():boolean{
    return true;
  }

  imagePath(path:string): string {
    if(!(path === "")){
    const retVal = 'https://localhost:44364/' + path;
    return retVal;
    }else{
      return "";
    }
  }

  get selectOptions(){
    return this.userTypes.map(({name})=>name);
  }

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
          this.profileForm.value.imageData = this.image;
        }
    });


  }


}

