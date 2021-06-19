import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsNavComponent } from './incidents-nav.component';

describe('IncidentsNavComponent', () => {
  let component: IncidentsNavComponent;
  let fixture: ComponentFixture<IncidentsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
