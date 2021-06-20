import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation/navigation.service';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.navigation.next(true);
  }

}
