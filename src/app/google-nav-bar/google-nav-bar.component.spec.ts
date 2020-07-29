import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleNavBarComponent } from './google-nav-bar.component';

describe('GoogleNavBarComponent', () => {
  let component: GoogleNavBarComponent;
  let fixture: ComponentFixture<GoogleNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
