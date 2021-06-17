/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicInfWrComponent } from './basic-inf-wr.component';

describe('BasicInfWrComponent', () => {
  let component: BasicInfWrComponent;
  let fixture: ComponentFixture<BasicInfWrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInfWrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
