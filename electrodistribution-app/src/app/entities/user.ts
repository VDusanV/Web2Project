import { UserType } from "./enums/user-type.enum";

export class User {
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
   
    constructor(username: string,email: string, password: string, nameAndLastname: string, addr: string, birthDate: string, userType: string){
    
        this.birthDate = birthDate;
        this.password = password;
        this.email = email;
        this.username = username;
        this.nameAndLastname = nameAndLastname;
        this.address = addr;
        this.userType = userType;
        this.activeStatus = false;
        this.notifications = new Array<Notification>();
    }
}
