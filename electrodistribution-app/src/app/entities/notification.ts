export class Notification {
    id: number;
    type: string;
    text: string;
    timeStamp: string;
    user: string;

    

    constructor(
        id: number,
        type: string, 
        text: string,
        timeStamp: string,
        user: string
        )       
    {
        this.id = id;
        this.type = type;
        this.text = text;
        this.timeStamp = timeStamp;
        this.user = user;
        
    }
}