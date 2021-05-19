
export class Element {
    type: string;
    id: number;
    name: string;
    address: string;
    coordinates: string;

    

    constructor(
        type: string, 
        id: number,
        name: string,
        address: string,
        coordinates: string
        )       
    {
        this.id = id;
        this.type = type;
        this.address = address;
        this.name = name;
        this.coordinates = coordinates;
        
    }
}
