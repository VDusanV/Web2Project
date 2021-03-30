import { UserType } from "./enums/user-type.enum";

export class User {
    username: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    address: string;
    birth: string;
    typeOfUser: UserType;
    image: string;
   
    constructor(username: string,email: string, password: string, name: string, lastname: string, addr: string, birth: string, typeu: UserType, img: string){
    
        this.birth = birth;
        this.password = password;
        this.email = email;
        this.username = username;
        this.name = name;
        this.surname = lastname;
        this.address = addr;
        this.typeOfUser = typeu;
        this.image = img;
    }
}
