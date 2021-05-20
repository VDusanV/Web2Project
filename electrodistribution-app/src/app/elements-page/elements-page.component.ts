import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../services/elements.service';
import { Element } from '../entities/element';

@Component({
  selector: 'app-elements-page',
  templateUrl: './elements-page.component.html',
  styleUrls: ['./elements-page.component.css']
})
export class ElementsPageComponent implements OnInit {
  type!: string;
  public allElements : Element[] = [];
  public page = 10;
  public pageSize = 3;


  constructor(private elementsService: ElementsService) { }

  ngOnInit(): void {

    this.elementsService.loadElements()
    .subscribe(data => this.allElements = data);

  }

}
