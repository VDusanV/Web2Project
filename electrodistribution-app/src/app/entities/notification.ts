export class Notification {
    id: number;
    type: string;
    text: string;
    timestamp: string;
    user: string;

    

    constructor(
        id: number,
        type: string, 
        text: string,
        timestamp: string,
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