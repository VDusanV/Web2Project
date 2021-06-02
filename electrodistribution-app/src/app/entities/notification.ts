export class Notification {
    id: number;
    type: string;
    text: string;
    timestamp: Date;
    user: string;

    

    constructor(
        id: number,
        type: string, 
        text: string,
        timestamp: Date,
        user: string
        )       
    {
        this.id = id;
        this.type = type;
        this.text = text;
        this.timestamp = timestamp;
        this.user = user;
        
    }
}