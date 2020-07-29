import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleTrashComponent } from './google-trash.component';

describe('GoogleTrashComponent', () => {
  let component: GoogleTrashComponent;
  let fixture: ComponentFixture<GoogleTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleTrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
