import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsMultimediaAttachmentsComponent } from './incidents-multimedia-attachments.component';

describe('IncidentsMultimediaAttachmentsComponent', () => {
  let component: IncidentsMultimediaAttachmentsComponent;
  let fixture: ComponentFixture<IncidentsMultimediaAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentsMultimediaAttachmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsMultimediaAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
