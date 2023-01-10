import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareOrganisationComponent } from './healthcare-organisation.component';

describe('HealthcareOrganisationComponent', () => {
  let component: HealthcareOrganisationComponent;
  let fixture: ComponentFixture<HealthcareOrganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcareOrganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
