import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsDevicesComponent } from './incidents-devices.component';

describe('IncidentsDevicesComponent', () => {
  let component: IncidentsDevicesComponent;
  let fixture: ComponentFixture<IncidentsDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentsDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
