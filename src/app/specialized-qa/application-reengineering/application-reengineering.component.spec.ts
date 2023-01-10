import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationReengineeringComponent } from './application-reengineering.component';

describe('ApplicationReengineeringComponent', () => {
  let component: ApplicationReengineeringComponent;
  let fixture: ComponentFixture<ApplicationReengineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationReengineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationReengineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
