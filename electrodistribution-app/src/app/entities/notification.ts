export class Notification {
    id: number;
    status: string;
    type: string;
    text: string;
    timeStamp: string;
    user: string;

    

    constructor(
        id: number,
        status: string,
        type: string, 
        text: string,
        timeStamp: string,
        user: string
        )       
    {
        this.id = id;
        this.status = status;
        this.type = type;
        this.text = text;
        this.timeStamp = timeStamp;
        this.user = user;
        
    }
}