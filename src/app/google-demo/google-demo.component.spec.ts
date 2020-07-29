import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDemoComponent } from './google-demo.component';

describe('GoogleDemoComponent', () => {
  let component: GoogleDemoComponent;
  let fixture: ComponentFixture<GoogleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
