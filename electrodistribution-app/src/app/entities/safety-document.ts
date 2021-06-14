
export class SafetyDocument {
    //Basic Information
    type?: string;
    status?: string;
    switchingPlan?: string;
    safetyDocType?: string; //ne znam sta je, nije napisano u spec
    dateCreated?: string; 
    createdBy?: string;
    phoneNum?: string;
    fieldCrew?: string;
    details?: string;
    notes?: string;
    //History of state changes

    //Multimedia attachments

    //Devices

    //Checklist
    
    constructor(
        type?: string, 
        status?: string,
        switchingPlan?: string,
        safetyDocType?: string,
        dateCreated?: string,
        createdBy?: string,
        phoneNum?: string,
        fieldCrew?: string,
        details?: string,
        notes?: string
        )       
    {
        this.type = type;
        this.status = status;
        this.switchingPlan = switchingPlan;
        this.safetyDocType = safetyDocType;
        this.dateCreated = dateCreated;
        this.createdBy = createdBy;
        this.phoneNum = phoneNum;
        this.fieldCrew = fieldCrew;
        this.details = details;
        this.notes = notes;
        
    }
}
