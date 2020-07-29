import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleNotesComponent } from './google-notes.component';

describe('GoogleNotesComponent', () => {
  let component: GoogleNotesComponent;
  let fixture: ComponentFixture<GoogleNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
