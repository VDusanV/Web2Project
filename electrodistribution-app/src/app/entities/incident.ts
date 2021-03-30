import { IncidentType } from "./enums/incident-type.enum";

export class Incident {
    id: string;
    typeOfInc: IncidentType;
    priority: number;
    confirmed: boolean;
    status: string;
    eta: string;
    ata: string;
    OutageTime: string;
    etr: string;
    affectedCustomers: number;
    calls: number;
    voltageLevel: number;
    scheduledTime: string;

    constructor(id: string,
        typeOfInc: IncidentType,
        priority: number,
        confirmed: boolean,
        status: string,
        eta: string,
        ata: string,
        OutageTime: string,
        etr: string,
        affectedCustomers: number,
        calls: number,
        voltageLevel: number,
        scheduledTime: string)       
    {
        this.id= id;
        this.typeOfInc= typeOfInc;
        this.priority= priority;
        this.confirmed= confirmed;
        this.status= status;
        this.eta= eta;
        this.ata= ata;
        this.OutageTime= OutageTime;
        this.etr= etr;
        this.affectedCustomers= affectedCustomers;
        this.calls= calls;
        this.voltageLevel= voltageLevel;
        this.scheduledTime= scheduledTime;
    }
}
