import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  invalidLogin!: boolean;
  selectedFile : any = null; 
  credentials : any;
  constructor(private router: Router, private http: HttpClient) { }

  onFileSelected(event:any){
    this.selectedFile=<File>event.target.files[0];
  }


  public register = (form: NgForm) => {
     this.credentials = JSON.stringify(form.value);
    //this.credentials += this.selectedFile;
    console.log(this.credentials);
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

}
