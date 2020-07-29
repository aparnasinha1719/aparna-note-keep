import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSidebarComponent } from './google-sidebar.component';

describe('GoogleSidebarComponent', () => {
  let component: GoogleSidebarComponent;
  let fixture: ComponentFixture<GoogleSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
