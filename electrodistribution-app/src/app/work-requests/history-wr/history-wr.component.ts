import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkRequestsService } from 'src/app/services/work-requests/work-requests.service';

@Component({
  selector: 'app-history-wr',
  templateUrl: './history-wr.component.html',
  styleUrls: ['./history-wr.component.css']
})
export class HistoryWrComponent implements OnInit {
  historyForm = new FormGroup({
    state: new FormControl('')
  });
  public component = "history";
  public toNavbar = [this.historyForm, this.component];

  constructor(private router: Router, private _workService: WorkRequestsService) { }

  ngOnInit() {
  }
  onSave() {
   
    this._workService.emitChange(this.toNavbar);
    this.router.navigate(['/work-requests/new/multimedia']);
  }
}
