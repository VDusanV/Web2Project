import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params: new HttpParams()
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

getCurrentUser(): Observable<any> {
  const param = new HttpParams().append('username', localStorage.getItem("username")!);
  httpOptions.params = param;
  return this.http.get("https://localhost:44364/api/User/CurrentUser", httpOptions);
}
loadUsers(): Observable<IUser[]>{
  return this.http.get<IUser[]>("https://localhost:44364/api/User")
}
activateUser(username:string) {
  const params = new HttpParams().append('username',username);
 
  console.log("aaaaaabbbbssss"+username);
  this.http.put("https://localhost:44364/api/User/Verification",null,{params: params})
  .subscribe(
    error=>console.log('oops',error)
  );

  return;
}

changeUserPassword(credentials:any){
  const params = new HttpParams().append('password', credentials.password);
  console.log("kod metode" + credentials);
  this.http.put("https://localhost:44364/api/User/ChangePassword", credentials, {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })})
    .subscribe(
      error => console.log('oops', error)
    );
}

}
export interface IUser{
  username: string;
  password: string;
  nameAndLastname: string;
  birthDate: string;
  address: string;
  imageData: any;
  email: string;
  userType: string;
  notifications: Array<Notification>;
  activeStatus: boolean;
}