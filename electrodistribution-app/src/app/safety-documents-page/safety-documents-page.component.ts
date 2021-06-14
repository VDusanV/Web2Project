import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation/navigation.service';

@Component({
  selector: 'app-safety-documents-page',
  templateUrl: './safety-documents-page.component.html',
  styleUrls: ['./safety-documents-page.component.css']
})
export class SafetyDocumentsPageComponent implements OnInit {
  public displaySafetyDocumentContent = true;

  
  

  constructor(private navigationService: NavigationService, private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }

  ngAfterContentChecked() {

    this.onGetDisplayContent();
    this.cdref.detectChanges();
    
  }


  onGetDisplayContent(){
    //console.log("kliknuo");
    this.navigationService.navigation$.subscribe((isreached)=>{
      if(isreached){
         this.displaySafetyDocumentContent = false;
         //console.log('isreached je true i emitovao sam observable')
      } else 
      {
        this.displaySafetyDocumentContent = true;
      }
    });
  }
 


}
