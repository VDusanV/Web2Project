import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkRequestsService } from 'src/app/services/work-requests/work-requests.service';

@Component({
  selector: 'app-multimedia-wr',
  templateUrl: './multimedia-wr.component.html',
  styleUrls: ['./multimedia-wr.component.css']
})
export class MultimediaWrComponent implements OnInit {
  multimediaForm = new FormGroup({
      file: new FormControl('')
  });

  public component = "multimedia";
  public toNavbar = [this.multimediaForm, this.component];

  imageUrl="";
  fileToUpload : any;
  progress: any;
  message: any;
  imagePath!: {dbPath: ''};


  @Output() public onUploadFinished = new EventEmitter();
  

  constructor(private router: Router, private _workService: WorkRequestsService,private http: HttpClient) { }
  
  //citanje slike
  handleFileInput(event : Event){
  const element = event.currentTarget as HTMLInputElement;
  let fileList: FileList | null = element.files;

    this.fileToUpload = fileList?.item(0)

    var reader = new FileReader();
    reader.onload = (eventt:any) =>{
      this.imageUrl = eventt.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);

  }

   //slanje slike
   public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);


    this.http.post('https://localhost:44364/api/User/Upload', formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
      {
          const total: number = <number>event.total;  
          this.progress = Math.round(100 * event.loaded / total);
      }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
          console.log(event.body);
          this.imagePath = event.body as {dbPath: ''};
          console.log(this.imagePath);
        }
    });


  }

  ngOnInit() {
  }
  onSave() {
   
    this._workService.emitChange(this.toNavbar);
    this.router.navigate(['/work-requests/new/equipment']);
  }
}
