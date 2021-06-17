/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultimediaWrComponent } from './multimedia-wr.component';

describe('MultimediaWrComponent', () => {
  let component: MultimediaWrComponent;
  let fixture: ComponentFixture<MultimediaWrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaWrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
